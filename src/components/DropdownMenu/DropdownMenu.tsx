import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { logout } from '../../redux/actions/user/user';
import {
  clear,
  openModal,
  toggleMenu,
} from '../../redux/actions/system/system';

import Icon from '../Icon';

import SignInIcon from '../../assets/images/icons/sign_in.svg';
import SignOutIcon from '../../assets/images/icons/sign_out.svg';
import RegIcon from '../../assets/images/icons/assignment.svg';

import classes from './DropdownMenu.scss';
import { clearFolders } from '../../redux/actions/folder/folder';

type StateType = {
  user: InitialUserStateType;
  system: InitialSystemStateType;
};

const DURATION = 490;

const DropdownMenu = (): JSX.Element => {
  const isAuth = useSelector((state: StateType) => state.user.isAuth);
  const isOpenMenu = useSelector((state: StateType) => state.system.isMenuOpen);
  const dispatch = useDispatch();

  return (
    <Transition
      in={isOpenMenu}
      appear
      timeout={DURATION}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <ul className={classNames(classes.Menu, classes[`${state}`])}>
          {isAuth && (
            <li
              className={classes.MenuItem}
              onClick={() => {
                dispatch(logout());
                dispatch(clear());
                dispatch(clearFolders());
                dispatch(toggleMenu());
              }}
              role="menuitem"
              aria-hidden="true"
            >
              <Icon icon={<SignOutIcon />} type="sign" />
              <span className={classes.Text}>Выход</span>
            </li>
          )}
          {!isAuth && (
            <>
              <li
                className={classes.MenuItem}
                onClick={() => {
                  dispatch(openModal('registration'));
                  dispatch(toggleMenu());
                }}
                role="menuitem"
                aria-hidden="true"
              >
                <Icon icon={<RegIcon />} type="reg" />
                <span className={classes.Text}>Зарегистрироваться</span>
              </li>
              <li
                className={classes.MenuItem}
                onClick={() => {
                  dispatch(openModal('login'));
                  dispatch(toggleMenu());
                }}
                role="menuitem"
                aria-hidden="true"
              >
                <Icon icon={<SignInIcon />} type="sign" />
                <span className={classes.Text}>Войти</span>
              </li>
            </>
          )}
        </ul>
      )}
    </Transition>
  );
};

export default DropdownMenu;
