import React from 'react';

import classNames from 'classnames';

import Count from '../../Count';

import classes from './FolderItem.scss';

type FolderItemPropsType = {
  color: string;
  name: string;
  numberOfTask: number;
  onClick: () => void;
  active: boolean;
};

const FolderItem = ({
  color,
  name,
  numberOfTask,
  onClick,
  active,
}: FolderItemPropsType): JSX.Element => (
  <button
    className={classNames({
      [classes.Item]: true,
      [classes.Btn]: true,
      [classes.Active]: active,
    })}
    type="button"
    tabIndex={0}
    onClick={onClick}
  >
    <span className={classes.Left}>
      <span className={classNames(classes.Badge, `bgColor-${color}`)} />
      <span>{name}</span>
    </span>

    <Count numberOfTask={numberOfTask} color={color} />
  </button>
);

export default FolderItem;
