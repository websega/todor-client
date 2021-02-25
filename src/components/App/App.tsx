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

import classNames from 'classnames';

import { auth } from '../../redux/actions/async';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskArea from '../TaskArea';
import Description from '../Description';

import Modal from '../Modal';

import Registration from '../Registration';
import Login from '../Login';
import Profile from '../Profile';

import classes from './App.scss';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

type StateType = {
  folders: InitialFolderStateType;
  user: InitialUserStateType;
  system: InitialSystemStateType;
};

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const folders = useSelector((state: StateType) => state.folders.folders);
  const isAuth = useSelector((state: StateType) => state.user.isAuth);
  const isMinifiedSidebar = useSelector(
    (state: StateType) => state.system.isMinifiedSidebar
  );

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  useEffect(() => {
    if (isAuth && folders.length && location.pathname === '/') {
      history.push(`/${folders[0]._id}/all`);
    }

    if (isAuth && !folders.length) {
      history.push('/');
    }
  }, [history, isAuth, folders, location.pathname]);

  return (
    <div
      className={classNames({
        [classes.App]: true,
        [classes.VisibleSidebar]: !isMinifiedSidebar,
        [classes.HideSidebar]: isMinifiedSidebar,
      })}
    >
      {!isAuth && (
        <Switch>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Redirect to="/login" />
        </Switch>
      )}
      {isAuth && (
        <Switch>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route>
            <Header />
            <Sidebar />
            <TaskArea />
            <Description />
          </Route>
        </Switch>
      )}

      {ReactDOM.createPortal(<Modal />, modalRoot)}
    </div>
  );
};

export default App;
