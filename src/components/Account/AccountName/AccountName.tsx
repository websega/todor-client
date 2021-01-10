import React from 'react';

import classes from './AccountName.scss';

const isAuth = false;

interface AccountNameProps {
  name: string;
}

const AccountName = ({ name }: AccountNameProps): JSX.Element => (
  <span className={classes.Name}>{isAuth ? name : 'Гость'}</span>
);

export default AccountName;
