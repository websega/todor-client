import React from 'react';

import Account from '../Account';

import classes from './Header.scss';

const Header = React.memo(
  (): JSX.Element => (
    <div className={classes.Header}>
      <Account />
    </div>
  )
);

Header.displayName = 'Header';

export default Header;
