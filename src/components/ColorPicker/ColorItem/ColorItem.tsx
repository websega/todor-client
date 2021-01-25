import React from 'react';

import classNames from 'classnames';

import classes from './ColorItem.scss';

type ColorItemProps = { name: string };

const ColorItem = ({ name }: ColorItemProps): JSX.Element => (
  <button
    type="button"
    className={classNames({
      [classes.СolorItem]: true,
      [`bgColor-${name}`]: true,
    })}
    data-color={name}
  />
);

export default ColorItem;
