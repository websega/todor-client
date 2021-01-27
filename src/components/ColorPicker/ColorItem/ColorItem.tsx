import React from 'react';

import classNames from 'classnames';

import classes from './ColorItem.scss';

type ColorItemProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const ColorItem = ({
  name,
  onClick,
  isActive,
}: ColorItemProps): JSX.Element => (
  <button
    type="button"
    className={classNames({
      [classes.СolorItem]: true,
      [`bgColor-${name}`]: true,
      [classes[`active-${name}`]]: isActive,
    })}
    data-color={name}
    onClick={onClick}
  />
);

export default ColorItem;
