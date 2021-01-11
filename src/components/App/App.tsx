import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactDOM from 'react-dom';

import { auth } from '../../redux/actions/async';

import Header from '../Header';
import Modal from '../Modal';

import classes from './App.scss';

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <div className={classes.App}>
      <Header />
      {ReactDOM.createPortal(<Modal />, modalRoot)}
    </div>
  );
};

export default App;
