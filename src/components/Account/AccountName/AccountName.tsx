import React from 'react';

import classes from './AccountName.scss';

interface AccountNameProps {
  name: string;
}

const AccountName = ({ name }: AccountNameProps): JSX.Element => (
  <span className={classes.Name}>{name}</span>
);

export default AccountName;
