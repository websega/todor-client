import React from 'react';

import classNames from 'classnames';

import API_URL from '../../../constants/constants';

import DefaultAvatar from '../../../assets/images/user.png';

import classes from './Avatar.scss';

type AvatarImgPropsType = { color: string; avatarURL: string | null };

const Avatar = React.memo(
  ({ color, avatarURL }: AvatarImgPropsType): JSX.Element => (
    <picture
      className={classNames(classes.Picture, classes[`BorderColor-${color}`])}
    >
      <img
        src={avatarURL ? `${API_URL}${avatarURL}` : DefaultAvatar}
        alt="account"
      />
    </picture>
  )
);

Avatar.displayName = 'Avatar';

export default Avatar;
