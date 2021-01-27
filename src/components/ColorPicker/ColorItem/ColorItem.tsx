import React from 'react';

import classNames from 'classnames';

import classes from './ColorItem.scss';

type ColorItemProps = { name: string; onClick: () => void };

const ColorItem = ({ name, onClick }: ColorItemProps): JSX.Element => (
  <button
    type="button"
    className={classNames({
      [classes.СolorItem]: true,
      [`bgColor-${name}`]: true,
    })}
    data-color={name}
    onClick={onClick}
  />
);

export default ColorItem;
