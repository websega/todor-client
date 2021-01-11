import React from 'react';

import SearchForm from '../SearchForm';
import Account from '../Account';
import Logo from '../Logo';

import classes from './Header.scss';

const Header = (): JSX.Element => (
  <div className={classes.Header}>
    <div className={classes.Left}>
      <Logo />
      <SearchForm />
    </div>
    <Account />
  </div>
);

export default Header;
