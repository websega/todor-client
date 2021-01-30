import React from 'react';

import LogoIcon from '../../assets/images/icons/logo-colored.svg';

import classes from './Logo.scss';

const Logo = (): JSX.Element => (
  <div className={classes.Logo}>
    <LogoIcon />
    <h1>todor</h1>
  </div>
);

export default Logo;
