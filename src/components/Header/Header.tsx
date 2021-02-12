import React from 'react';

import SearchForm from '../SearchForm';
import Account from '../Account';

import classes from './Header.scss';

const Header = (): JSX.Element => (
  <div className={classes.Header}>
    <div className={classes.Left}>
      <SearchForm />
    </div>
    <Account />
  </div>
);

export default Header;
