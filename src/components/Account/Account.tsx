import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import AccountImg from './AccountImg';
import AccountName from './AccountName';
import DropdownMenu from '../DropdownMenu';
import IconButton from '../IconButton';

import ArrowIcon from '../../assets/images/icons/arrow_down.svg';

import classes from './Account.scss';

type AccountProps = {
  username: string;
};

const dropdownRoot = document.getElementById('dropdown-root') as HTMLElement;

const Account = React.memo(
  ({ username }: AccountProps): JSX.Element => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);

    const toggleMenu = useCallback(() => {
      setIsOpenMenu(!isOpenMenu);
    }, [isOpenMenu]);

    return (
      <>
        <div className={classes.Account}>
          <div className={classes.User}>
            <AccountImg />
            <AccountName name={username} />
          </div>

          <IconButton
            icon={<ArrowIcon />}
            inverted={isOpenMenu}
            onClick={toggleMenu}
          />
        </div>
        {isOpenMenu
          ? ReactDOM.createPortal(<DropdownMenu />, dropdownRoot)
          : null}
      </>
    );
  }
);

Account.displayName = 'Account';

export default Account;
