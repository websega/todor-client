import React from 'react';

import accountImg from '../../../assets/images/accountImg.png';

import classes from './AccountImg.scss';

const AccountImg = (): JSX.Element => (
  <picture className={classes.Picture}>
    <img src={accountImg} alt="account" />
  </picture>
);

export default AccountImg;
