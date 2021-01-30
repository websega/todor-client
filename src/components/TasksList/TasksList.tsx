import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { FolderType } from '../../redux/actions/folder/types';
import { setCurrentTask } from '../../redux/actions/system/system';
import { completedTask } from '../../redux/actions/user/async';

import Task from './Task';

import classes from './TasksList.scss';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TasksList = (): JSX.Element => {
  const dispatch = useDispatch();

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );
  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
  );

  const taskClickHandler = (e: React.MouseEvent, id: string) => {
    console.dir(e.currentTarget);

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
      <Route exact path="/folder/:id">
        {currentFolder &&
          currentFolder.tasks.map((task) => {
            const { id, title, completed, important, date } = task;
            return (
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
          })}
      </Route>
    </div>
  );
};

export default TasksList;
