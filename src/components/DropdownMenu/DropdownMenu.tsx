import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { IUserState } from '../../redux/reducers/userReducer';

import SignInIcon from '../../assets/images/icons/sign_in.svg';
import SignOutIcon from '../../assets/images/icons/sign_out.svg';
import RegIcon from '../../assets/images/icons/assignment.svg';

import Icon from '../Icon';

import classes from './DropdownMenu.scss';
import { logout } from '../../redux/actions/user';

type DropdownMenuProps = {
  onModal: (type: string) => void;
};

interface IState {
  user: IUserState;
}

const DropdownMenu = ({ onModal }: DropdownMenuProps): JSX.Element => {
  const isAuth = useSelector((state: IState) => state.user.isAuth);
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
              onModal('registration');
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
              onModal('login');
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
