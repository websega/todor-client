import React from 'react';

import classNames from 'classnames';

import classes from './ColorItem.scss';

type ColorItemProps = { name: string };

const ColorItem = ({ name }: ColorItemProps): JSX.Element => (
  <button
    type="button"
    className={classNames({
      [classes.colorItem]: true,
      [`bgColor-${name}`]: true,
    })}
  />
);

export default ColorItem;
