import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';
import { InitialUserStateType } from '../../../redux/reducers/userReducer';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';

import Count from '../../Count';
import Icon from '../../Icon';

import classes from './CategoryItem.scss';
import createDate from '../../../utils/createDate';

type CategoryItemPropsType = {
  name: string;
  id: string;
  icon: JSX.Element;
};

type StateType = {
  folders: InitialFolderStateType;
  user: InitialUserStateType;
  system: InitialSystemStateType;
};

const CategoryItem = React.memo(
  ({ icon, name, id }: CategoryItemPropsType): JSX.Element => {
    const currentFolder = useSelector(
      (state: StateType) => state.folders.currentFolder
    );

    const isMinifiedSidebar = useSelector(
      (state: StateType) => state.system.isMinifiedSidebar
    );

    const isAuth = useSelector((state: StateType) => state.user.isAuth);

    const [numberOfTask, setNumberOfTask] = useState<number>(0);

    useEffect(() => {
      if (currentFolder && isAuth) {
        let num = 0;

        if (id === 'all') {
          num = currentFolder.tasks.length;
        }

        num = currentFolder.tasks.filter(
          ({ completed, deleted, createdTime, important }) => {
            if (
              (id === 'all' && !completed && !deleted) ||
              (id === 'today' &&
                createdTime === createDate() &&
                !completed &&
                !deleted) ||
              (id === 'completed' && completed && !deleted) ||
              (id === 'important' && important && !completed && !deleted) ||
              (id === 'deleted' && deleted)
            ) {
              return true;
            }

            return false;
          }
        ).length;

        setNumberOfTask(num);
      } else {
        setNumberOfTask(0);
      }
    }, [id, currentFolder, isAuth]);

    return (
      <li className={classes.Item} aria-hidden="true">
        <NavLink
          to={`${id}`}
          className={classes.Link}
          activeClassName={classes.Active}
        >
          <div className={classes.Left}>
            <Icon icon={icon} type="category" />
            {!isMinifiedSidebar && <span>{name}</span>}
          </div>

          {numberOfTask > 0 && !isMinifiedSidebar ? (
            <Count numberOfTask={numberOfTask} color="default" />
          ) : null}
        </NavLink>
      </li>
    );
  }
);

CategoryItem.displayName = 'CategoryItem';

export default CategoryItem;
