import React from 'react';

import Icon from '../Icon';

import classes from './IconButton.scss';

type IconButtonProps = {
  icon: JSX.Element;
  iconType?: string;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  inverted?: boolean;
};

const IconButton = ({
  icon,
  iconType = 'default',
  onClick,
  inverted = false,
}: IconButtonProps): JSX.Element => (
  <button
    className={
      inverted ? [classes.Button, classes.Inverted].join(' ') : classes.Button
    }
    type="button"
    onClick={onClick}
  >
    <Icon icon={icon} type={iconType} />
  </button>
);

export default IconButton;
