import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';

import Count from '../../Count';
import Icon from '../../Icon';

import classes from './CategoryItem.scss';
import createDate from '../../../utils/createDate';

type CategoryItemPropsType = {
  name: string;
  categoryId: string;
  icon: JSX.Element;
  active: boolean;
  onClick: () => void;
};

type StateType = {
  folders: InitialFolderStateType;
};

const CategoryItem = ({
  icon,
  name,
  categoryId,
  active,
  onClick,
}: CategoryItemPropsType): JSX.Element => {
  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const [numberOfTask, setNumberOfTask] = useState<number>(0);

  useEffect(() => {
    if (currentFolder) {
      let num = 0;

      if (categoryId === 'all') {
        num = currentFolder.tasks.length;
      }

      num = currentFolder.tasks.filter((task) => {
        if (
          (categoryId === 'today' && task.createdTime === createDate()) ||
          (categoryId === 'completed' && task.completed) ||
          (categoryId === 'important' && task.important) ||
          (categoryId === 'deleted' && task.deleted)
        ) {
          return true;
        }

        return false;
      }).length;

      setNumberOfTask(num);
    }
  }, [categoryId, currentFolder]);

  return (
    <li
      className={classNames(classes.Item, { [classes.Active]: active })}
      onClick={onClick}
      aria-hidden="true"
    >
      <div role="button" tabIndex={0} className={classes.Btn}>
        <div className={classes.Left}>
          <Icon icon={icon} type="category" />
          <span>{name}</span>
        </div>

        {numberOfTask > 0 ? (
          <Count numberOfTask={numberOfTask} color="default" />
        ) : null}
      </div>
    </li>
  );
};

export default CategoryItem;
