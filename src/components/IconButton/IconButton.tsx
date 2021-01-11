import React from 'react';

import classNames from 'classnames';

import Icon from '../Icon';

import classes from './IconButton.scss';

type IconButtonProps = {
  icon: JSX.Element;
  iconType?: string;
  onClick: () => void;
  inverted?: boolean;
};

const IconButton = ({
  icon,
  iconType = 'default',
  onClick,
  inverted = false,
}: IconButtonProps): JSX.Element => (
  <button
    className={classNames({
      [classes.Button]: true,
      [classes.Inverted]: inverted,
    })}
    type="button"
    onClick={onClick}
  >
    <Icon icon={icon} type={iconType} />
  </button>
);

export default IconButton;
