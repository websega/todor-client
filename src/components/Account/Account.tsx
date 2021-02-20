import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { InitialSystemStateType } from '../../redux/reducers/systemReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import Avatar from './Avatar';
import Name from './Name';
import IconButton from '../IconButton';

import SettingsIcon from '../../assets/images/icons/settings.svg';

import classes from './Account.scss';

type StateType = {
  system: InitialSystemStateType;
  user: InitialUserStateType;
};

const Account = React.memo(
  (): JSX.Element => {
    const currentUser = useSelector(
      (state: StateType) => state.user.currentUser
    );

    const currentColor = useSelector(
      (state: StateType) => state.system.currentColor
    );

    return (
      <div className={classes.Account}>
        <div className={classes.User}>
          <Avatar color={currentColor} avatarURL={currentUser.avatar} />
          <Name name={currentUser.username} />
        </div>

        <Link to="/profile">
          <IconButton icon={<SettingsIcon />} />
        </Link>
      </div>
    );
  }
);

Account.displayName = 'Account';

export default Account;
