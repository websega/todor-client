import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';

import Count from '../../Count';

import classes from './FolderItem.scss';

type FolderItemPropsType = {
  color: string;
  id: string;
  name: string;
  numberOfTask: number;
  active: boolean;
};

type StateType = {
  system: InitialSystemStateType;
};

const FolderItem = React.memo(
  ({
    color,
    id,
    name,
    numberOfTask,
    active,
  }: FolderItemPropsType): JSX.Element => {
    const isMinifiedSidebar = useSelector(
      (state: StateType) => state.system.isMinifiedSidebar
    );

    return (
      <li
        className={classNames(classes.Item, {
          [classes.HideItem]: isMinifiedSidebar,
          [classes.Active]: active,
        })}
      >
        <Link
          className={classNames(classes.Link, {
            [classes.HideLink]: isMinifiedSidebar,
          })}
          to={{ pathname: `/${id}/all` }}
        >
          <span
            className={classNames(classes.Badge, `bgColor-${color}`, {
              [classes.HideBadge]: isMinifiedSidebar,
            })}
          />

          {!isMinifiedSidebar && <span className={classes.Text}>{name}</span>}

          {!isMinifiedSidebar && (
            <Count numberOfTask={numberOfTask} color={color} />
          )}
        </Link>
      </li>
    );
  }
);

FolderItem.displayName = 'FolderItem';

export default FolderItem;
