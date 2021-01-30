import React from 'react';

import classes from './AccountName.scss';

type AccountNamePropsType = {
  name: string;
};

const AccountName = ({ name }: AccountNamePropsType): JSX.Element => (
  <span className={classes.Name}>{name}</span>
);

export default AccountName;
