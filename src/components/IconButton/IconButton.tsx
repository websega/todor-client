import React from 'react';

import classNames from 'classnames';

import Icon from '../Icon';

import classes from './IconButton.scss';

type IconButtonPropsType = {
  icon: JSX.Element;
  iconType?: string;
  onClick?: () => void;
  important?: boolean;
};

const IconButton = ({
  icon,
  iconType = 'default',
  onClick,
  important,
}: IconButtonPropsType): JSX.Element => (
  <button
    className={classNames({
      [classes.Button]: true,
    })}
    type="button"
    onClick={onClick}
  >
    <Icon icon={icon} type={iconType} important={important} />
  </button>
);

export default IconButton;
