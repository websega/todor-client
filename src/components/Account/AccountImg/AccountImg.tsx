import React from 'react';

import classNames from 'classnames';

import accountImg from '../../../assets/images/accountImg.png';

import classes from './AccountImg.scss';

type AccountImgPropsType = { color: string };

const AccountImg = ({ color }: AccountImgPropsType): JSX.Element => (
  <picture
    className={classNames(classes.Picture, classes[`BorderColor-${color}`])}
  >
    <img src={accountImg} alt="account" />
  </picture>
);

export default AccountImg;
