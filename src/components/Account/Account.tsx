import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// eslint-disable-next-line max-len
import { InitialDropdownStateType } from '../../redux/reducers/dropdownMenuReducer';
import { toggleMenu } from '../../redux/actions/dropdownMenu';

import AccountImg from './AccountImg';
import AccountName from './AccountName';
import IconButton from '../IconButton';

import ArrowIcon from '../../assets/images/icons/arrow_down.svg';

import classes from './Account.scss';

type AccountProps = {
  username: string;
};

type StateType = { dropdownMenu: InitialDropdownStateType };

const Account = React.memo(
  ({ username }: AccountProps): JSX.Element => {
    const isOpen = useSelector((state: StateType) => state.dropdownMenu.isOpen);
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
