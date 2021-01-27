import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';

import { auth } from '../../redux/actions/user/async';

import Header from '../Header';
import Sidebar from '../Sidebar';
import TaskArea from '../TaskArea';
import Description from '../Description';
import Modal from '../Modal';
import DropdownMenu from '../DropdownMenu';

import classes from './App.scss';

const modalRoot = document.getElementById('modal-root') as HTMLElement;
const dropdownRoot = document.getElementById('dropdown-root') as HTMLElement;

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <div className={classes.App}>
      <Header />
      <Sidebar />
      <TaskArea />
      <Description />

      {ReactDOM.createPortal(<Modal />, modalRoot)}
      {ReactDOM.createPortal(<DropdownMenu />, dropdownRoot)}
    </div>
  );
};

export default App;
