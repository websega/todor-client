import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { logout } from '../../redux/actions/user/user';
import { clear, openDropdownMenu } from '../../redux/actions/system/system';
import { clearFolders } from '../../redux/actions/folder/folder';

import Icon from '../Icon';

import SignOutIcon from '../../assets/images/icons/sign_out.svg';

import classes from './DropdownMenu.scss';

type StateType = {
  user: InitialUserStateType;
  system: InitialSystemStateType;
};

const DURATION = 490;

const DropdownMenu = (): JSX.Element => {
  const isOpen = useSelector(
    (state: StateType) => state.system.isOpenDropdownMenu
  );
  const dispatch = useDispatch();

  return (
    <Transition
      in={isOpen}
      appear
      timeout={DURATION}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <ul className={classNames(classes.Menu, classes[`${state}`])}>
          <li
            className={classes.MenuItem}
            onClick={() => {
              dispatch(openDropdownMenu());
              dispatch(logout());
              dispatch(clear());
              dispatch(clearFolders());
            }}
            role="menuitem"
            aria-hidden="true"
          >
            <Icon icon={<SignOutIcon />} type="sign" />
            <span className={classes.Text}>Выход</span>
          </li>
        </ul>
      )}
    </Transition>
  );
};

export default DropdownMenu;
