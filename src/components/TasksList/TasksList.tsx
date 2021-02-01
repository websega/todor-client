import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { setCurrentTask } from '../../redux/actions/system/system';
import { completedTask } from '../../redux/actions/user/async';

import Task from './Task';

import classes from './TasksList.scss';
import createDate from '../../utils/createDate';
import getElementLabel from '../../helpers/getElementLabel';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TasksList = (): JSX.Element => {
  const dispatch = useDispatch();
  const match = useRouteMatch('/:currentFolder/:currentCategory');

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
  );

  const taskClickHandler = (e: React.MouseEvent, id: string) => {
    if (e.currentTarget.nodeName !== 'DIV') {
      return;
    }

    dispatch(setCurrentTask(id));
  };

  const checkboxClickHandler = (id: string, completed: boolean) => {
    if (currentFolder) {
      dispatch(completedTask(id, currentFolder._id, completed));
    }
  };

  return (
    <div className={classes.TasksContainer}>
      {currentFolder &&
        match &&
        currentFolder.tasks.map((task) => {
          const { id, title, completed, important, deleted, date } = task;
          const element = (
            <Task
              key={id}
              inputId={id}
              title={title}
              completed={completed}
              important={important}
              date={date}
              active={currentTaskId === id}
              currentFolderColor={currentFolder.colorId}
              onClick={(e) => taskClickHandler(e, id)}
              onComplete={checkboxClickHandler}
            />
          );

          if (match.url === `/${currentFolder._id}/all`) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/completed` &&
            completed
          ) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/important` &&
            important
          ) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/deleted` &&
            deleted
          ) {
            return element;
          }

          return null;
        })}
    </div>
  );
};

export default TasksList;
