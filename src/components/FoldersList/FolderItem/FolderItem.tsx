import React from 'react';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import Count from '../../Count';

import classes from './FolderItem.scss';

type FolderItemPropsType = {
  color: string;
  id: string;
  name: string;
  numberOfTask: number;
  active: boolean;
};

const FolderItem = React.memo(
  ({
    color,
    id,
    name,
    numberOfTask,
    active,
  }: FolderItemPropsType): JSX.Element => (
    <li className={classNames(classes.Item, { [classes.Active]: active })}>
      <Link className={classes.Link} to={{ pathname: `/${id}/all` }}>
        <div className={classes.Left}>
          <span className={classNames(classes.Badge, `bgColor-${color}`)} />
          <span className={classes.Text}>{name}</span>
        </div>
        <Count numberOfTask={numberOfTask} color={color} />
      </Link>
    </li>
  )
);

FolderItem.displayName = 'FolderItem';

export default FolderItem;
