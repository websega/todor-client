import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { InitialUserStateType } from '../../redux/reducers/userReducer';
// eslint-disable-next-line max-len
import { InitialDropdownStateType } from '../../redux/reducers/dropdownMenuReducer';
import { logout } from '../../redux/actions/user';
import { openModal } from '../../redux/actions/modal';

import Icon from '../Icon';

import SignInIcon from '../../assets/images/icons/sign_in.svg';
import SignOutIcon from '../../assets/images/icons/sign_out.svg';
import RegIcon from '../../assets/images/icons/assignment.svg';

import classes from './DropdownMenu.scss';

type StateType = {
  user: InitialUserStateType;
  dropdownMenu: InitialDropdownStateType;
};

const DURATION = 490;

const DropdownMenu = (): JSX.Element => {
  const isAuth = useSelector((state: StateType) => state.user.isAuth);
  const isOpen = useSelector((state: StateType) => state.dropdownMenu.isOpen);
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
          {isAuth && (
            <li
              className={classes.MenuItem}
              onClick={() => {
                dispatch(logout());
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
