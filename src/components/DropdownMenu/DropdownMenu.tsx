import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { InitialModalStateType } from '../../redux/reducers/modalReducer';

import { logout } from '../../redux/actions/user/user';
import { openModal, toggleMenu } from '../../redux/actions/modal/modal';

import Icon from '../Icon';

import SignInIcon from '../../assets/images/icons/sign_in.svg';
import SignOutIcon from '../../assets/images/icons/sign_out.svg';
import RegIcon from '../../assets/images/icons/assignment.svg';

import classes from './DropdownMenu.scss';

type StateType = {
  user: InitialUserStateType;
  modal: InitialModalStateType;
};

const DURATION = 490;

const DropdownMenu = (): JSX.Element => {
  const isAuth = useSelector((state: StateType) => state.user.isAuth);
  const isOpen = useSelector((state: StateType) => state.modal.isMenuOpen);
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
