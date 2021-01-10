import React from 'react';

import SearchForm from '../SearchForm';
import Account from '../Account';

import classes from './Header.scss';
import Logo from '../Logo';

const Header = (): JSX.Element => (
  <div className={classes.Header}>
    <div className={classes.Left}>
      <Logo />
      <SearchForm />
    </div>
    <Account username="Sergey Vakhramov" />
  </div>
);

export default Header;
