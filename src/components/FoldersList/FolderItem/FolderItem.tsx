import React from 'react';

import classNames from 'classnames';

import MainText from '../../MainText';
import Count from '../../Count';

import classes from './FolderItem.scss';

type FolderItemPropsType = {
  color: string;
  name: string;
  numberOfTask: number;
};

const FolderItem = ({
  color,
  name,
  numberOfTask,
}: FolderItemPropsType): JSX.Element => (
  <button
    className={classNames(classes.Item, classes.Btn)}
    type="button"
    tabIndex={0}
  >
    <span className={classes.Left}>
      <span className={classNames(classes.Badge, `bgColor-${color}`)} />
      <MainText name={name} />
    </span>

    <Count numberOfTask={numberOfTask} color={color} />
  </button>
);

export default FolderItem;
