/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';

import NavToggleIcon from '../../assets/images/icons/nav-toggle.svg';

import IconButton from '../IconButton';

import classes from './ToggleSidebar.scss';

const ToggleSidebar = (): JSX.Element => (
  <div className={classes.Toggle}>
    <IconButton icon={<NavToggleIcon />} onClick={() => {}} />
  </div>
);

export default ToggleSidebar;
