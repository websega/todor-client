import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InitialModalStateType } from '../../redux/reducers/systemReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import { toggleMenu } from '../../redux/actions/system/system';

import AccountImg from './AccountImg';
import AccountName from './AccountName';
import IconButton from '../IconButton';

import ArrowIcon from '../../assets/images/icons/arrow_down.svg';

import classes from './Account.scss';

type StateType = {
  modal: InitialModalStateType;
  user: InitialUserStateType;
};

const Account = React.memo(
  (): JSX.Element => {
    const isOpen = useSelector((state: StateType) => state.modal.isMenuOpen);
    const username = useSelector(
      (state: StateType) => state.user.currentUser.username
    );
    const dispatch = useDispatch();

    return (
      <div className={classes.Account}>
        <div className={classes.User}>
          <AccountImg />
          <AccountName name={username} />
        </div>

        <IconButton
          icon={<ArrowIcon />}
          inverted={isOpen}
          onClick={() => {
            dispatch(toggleMenu());
          }}
        />
      </div>
    );
  }
);

Account.displayName = 'Account';

export default Account;
