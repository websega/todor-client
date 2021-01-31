import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { setCurrentTask } from '../../redux/actions/system/system';
import { completedTask } from '../../redux/actions/user/async';

import Task from './Task';

import classes from './TasksList.scss';
import createDate from '../../utils/createDate';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TasksList = (): JSX.Element => {
  const dispatch = useDispatch();

  const folders = useSelector((state: StateType) => state.folders.folders);

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
  );

  const currentCategory = useSelector(
    (state: StateType) => state.system.currentCategory
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
      {folders &&
        folders.map((folder) =>
          folder.tasks.map((task) => {
            const { id, title, completed, important, deleted, date } = task;
            return (
              <>
                <Route exact path="/inbox">
                  <Task
                    key={id}
                    inputId={id}
                    title={title}
                    completed={completed}
                    important={important}
                    date={date}
                    active={currentTaskId === id}
                    currentFolderColor={folder.colorId}
                    onClick={(e) => taskClickHandler(e, id)}
                    onComplete={checkboxClickHandler}
                  />
                </Route>
                <Route exact path={`/${currentCategory}`}>
                  {completed && currentCategory === 'completed' && (
                    <Task
                      key={id}
                      inputId={id}
                      title={title}
                      completed={completed}
                      important={important}
                      date={date}
                      active={currentTaskId === id}
                      currentFolderColor={folder.colorId}
                      onClick={(e) => taskClickHandler(e, id)}
                      onComplete={checkboxClickHandler}
                    />
                  )}
                  {important && currentCategory === 'important' && (
                    <Task
                      key={id}
                      inputId={id}
                      title={title}
                      completed={completed}
                      important={important}
                      date={date}
                      active={currentTaskId === id}
                      currentFolderColor={folder.colorId}
                      onClick={(e) => taskClickHandler(e, id)}
                      onComplete={checkboxClickHandler}
                    />
                  )}
                  {deleted && currentCategory === 'deleted' && (
                    <Task
                      key={id}
                      inputId={id}
                      title={title}
                      completed={completed}
                      important={important}
                      date={date}
                      active={currentTaskId === id}
                      currentFolderColor={folder.colorId}
                      onClick={(e) => taskClickHandler(e, id)}
                      onComplete={checkboxClickHandler}
                    />
                  )}
                  {date === createDate() && currentCategory === 'today' && (
                    <Task
                      key={id}
                      inputId={id}
                      title={title}
                      completed={completed}
                      important={important}
                      date={date}
                      active={currentTaskId === id}
                      currentFolderColor={folder.colorId}
                      onClick={(e) => taskClickHandler(e, id)}
                      onComplete={checkboxClickHandler}
                    />
                  )}
                </Route>
              </>
            );
          })
        )}
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
