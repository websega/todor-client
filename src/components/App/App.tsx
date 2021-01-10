import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from '../../redux/actions/async';

import Header from '../Header';

import classes from './App.scss';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, [dispatch]);

  return (
    <div className={classes.App}>
      <Header />
    </div>
  );
};

export default App;
