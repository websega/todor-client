import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import NavToggleIcon from '../../assets/images/icons/nav-toggle.svg';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import IconButton from '../IconButton';
import Logo from '../Logo';

import classes from './NavHeader.scss';

type NavHeaderpropsType = {
  onToggle: () => void;
};

type StateType = {
  system: InitialSystemStateType;
};

const NavHeader = ({ onToggle }: NavHeaderpropsType): JSX.Element => {
  const isMinifiedSidebar = useSelector(
    (state: StateType) => state.system.isMinifiedSidebar
  );

  return (
    <div
      className={classNames(classes.NavHeader, {
        [classes.Hide]: isMinifiedSidebar,
      })}
    >
      {!isMinifiedSidebar && <Logo />}
      <IconButton icon={<NavToggleIcon />} onClick={onToggle} />
    </div>
  );
};

export default NavHeader;
