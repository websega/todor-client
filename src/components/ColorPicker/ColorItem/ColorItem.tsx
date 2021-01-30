import React from 'react';

import classNames from 'classnames';

import classes from './ColorItem.scss';

type ColorItemPropsType = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const ColorItem = ({
  name,
  onClick,
  isActive,
}: ColorItemPropsType): JSX.Element => (
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
