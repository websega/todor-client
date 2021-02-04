import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InitialSystemStateType } from '../../redux/reducers/systemReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import { openDropdownMenu } from '../../redux/actions/system/system';

import AccountImg from './AccountImg';
import AccountName from './AccountName';
import IconButton from '../IconButton';

import ArrowIcon from '../../assets/images/icons/arrow_down.svg';

import classes from './Account.scss';

type StateType = {
  system: InitialSystemStateType;
  user: InitialUserStateType;
};

const Account = React.memo(
  (): JSX.Element => {
    const dispatch = useDispatch();

    const isOpen = useSelector((state: StateType) => state.system.isOpenDropdownMenu);

    const username = useSelector(
      (state: StateType) => state.user.currentUser.username
    );

    const currentColor = useSelector(
      (state: StateType) => state.system.currentColor
    );

    return (
      <div className={classes.Account}>
        <div className={classes.User}>
          <AccountImg color={currentColor} />
          <AccountName name={username} />
        </div>

        <IconButton
          icon={<ArrowIcon />}
          inverted={isOpen}
          onClick={() => {
            dispatch(openDropdownMenu());
          }}
        />
      </div>
    );
  }
);

Account.displayName = 'Account';

export default Account;
