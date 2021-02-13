import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactDOM from 'react-dom';
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';

import { auth } from '../../redux/actions/async';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskArea from '../TaskArea';
import Description from '../Description';

import Modal from '../Modal';
import DropdownMenu from '../DropdownMenu';

import classes from './App.scss';
import Registration from '../Registration';
import Login from '../Login';

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

  return (
    <div className={classes.App}>
      {!isAuth ? (
        <Switch>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/app">
            <Header />
            <Sidebar />
            <TaskArea />
            <Description />
          </Route>
          <Redirect to="/app" />
        </Switch>
      )}

      {ReactDOM.createPortal(<Modal />, modalRoot)}
      {ReactDOM.createPortal(<DropdownMenu />, dropdownMenuRoot)}
    </div>
  );
};

export default App;
