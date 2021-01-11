import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { logout } from '../../redux/actions/user';
import { openModal } from '../../redux/actions/modal';

import Icon from '../Icon';

import SignInIcon from '../../assets/images/icons/sign_in.svg';
import SignOutIcon from '../../assets/images/icons/sign_out.svg';
import RegIcon from '../../assets/images/icons/assignment.svg';

import classes from './DropdownMenu.scss';

type StateType = {
  user: InitialUserStateType;
};

const DropdownMenu = (): JSX.Element => {
  const isAuth = useSelector((state: StateType) => state.user.isAuth);
  const dispatch = useDispatch();

  return (
    <ul className={classes.Menu}>
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
  );
};

export default DropdownMenu;
