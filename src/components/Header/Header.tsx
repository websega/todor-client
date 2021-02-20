import React from 'react';

import Account from '../Account';

import classes from './Header.scss';

const Header = (): JSX.Element => (
  <div className={classes.Header}>
    <Account />
  </div>
);

export default Header;
