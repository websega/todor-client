import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import { useHistory, useLocation } from 'react-router-dom';

import { auth } from '../../redux/actions/user/async';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskArea from '../TaskArea';
import Description from '../Description';

import Modal from '../Modal';
import DropdownMenu from '../DropdownMenu';

import classes from './App.scss';

const modalRoot = document.getElementById('modal-root') as HTMLElement;
const dropdownMenuRoot = document.getElementById(
  'dropdown-root'
) as HTMLElement;

type StateType = {
  folders: InitialFolderStateType;
  user: InitialUserStateType;
};

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const folders = useSelector((state: StateType) => state.folders.folders);
  const isAuth = useSelector((state: StateType) => state.user.isAuth);

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/' && folders.length > 0) {
      history.push(`/${folders[0]._id}/all`);
    }

    if (location.pathname !== '/' && folders.length > 0) {
      history.push(`/${folders[0]._id}/all`);
    }

    if (!isAuth || folders.length === 0) {
      history.push('/');
    }
  }, [folders, history, isAuth, location.pathname]);

  return (
    <div className={classes.App}>
      <Header />
      <Sidebar />
      <TaskArea />
      <Description />

      {ReactDOM.createPortal(<Modal />, modalRoot)}
      {ReactDOM.createPortal(<DropdownMenu />, dropdownMenuRoot)}
      {/* {ReactDOM.createPortal(<ContextMenu />, contextMenuRoot)} */}
    </div>
  );
};

export default App;
