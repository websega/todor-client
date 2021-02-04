import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { setCurrentTask } from '../../redux/actions/system/system';
import {
  completedTask,
  deletedTask,
  importantTask,
} from '../../redux/actions/user/async';

import Task from './Task';

import createDate from '../../utils/createDate';

import classes from './TasksList.scss';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TasksList = (): JSX.Element => {
  const dispatch = useDispatch();
  const match = useRouteMatch('/:currentCategory/:currentFolder');

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

  const taskCheckboxHandler = (id: string, completed: boolean) => {
    if (currentFolder) {
      dispatch(completedTask(id, currentFolder._id, completed));
    }
  };

  const taskImportantHandler = (id: string) => {
    if (currentFolder) {
      dispatch(importantTask(id, currentFolder._id));
    }
  };

  const taskDeleteHandler = (id: string) => {
    if (currentFolder) {
      dispatch(deletedTask(id, currentFolder._id));
    }
  };

  return (
    <div className={classes.TasksContainer}>
      {currentFolder &&
        match &&
        currentFolder.tasks.map((task) => {
          const {
            id,
            title,
            completed,
            important,
            deleted,
            createdTime,
          } = task;
          const element = (
            <Task
              key={id}
              inputId={id}
              title={title}
              completed={completed}
              important={important}
              date={createdTime}
              active={currentTaskId === id}
              currentFolderColor={currentFolder.colorId}
              onClick={(e) => taskClickHandler(e, id)}
              onComplete={taskCheckboxHandler}
              onImportant={() => taskImportantHandler(id)}
              onDelete={() => taskDeleteHandler(id)}
            />
          );

          if (match.url === `/${currentFolder._id}/all` && !deleted) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/today` &&
            createdTime === createDate() &&
            !deleted
          ) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/completed` &&
            completed &&
            !deleted
          ) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/important` &&
            important &&
            !deleted
          ) {
            return element;
          }

          if (match.url === `/${currentFolder._id}/deleted` && deleted) {
            return element;
          }

          return null;
        })}
    </div>
  );
};

export default TasksList;
