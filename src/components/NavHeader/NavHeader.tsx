import React from 'react';

import NavToggleIcon from '../../assets/images/icons/nav-toggle.svg';

import IconButton from '../IconButton';
import Logo from '../Logo';

import classes from './NavHeader.scss';

const NavHeader = (): JSX.Element => (
  <div className={classes.NavHeader}>
  <Logo />
  <IconButton
    icon={<NavToggleIcon />}
    onClick={() => console.log('toggle sidebar')}
  />
</div>
);

export default NavHeader;
