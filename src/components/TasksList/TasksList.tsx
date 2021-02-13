import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, useRouteMatch } from 'react-router-dom';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { setCurrentTask } from '../../redux/actions/system/system';
import { toggleTaskProperty } from '../../redux/actions/async';

import Task from './Task';

import createDate from '../../utils/createDate';

import classes from './TasksList.scss';
import { TaskType } from '../../redux/actions/folder/types';

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

  const taskTogglePropertyHandler = (
    taskId: string,
    propName: keyof TaskType
  ) => {
    if (currentFolder) {
      dispatch(toggleTaskProperty(taskId, currentFolder._id, propName));
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
              onComplete={taskTogglePropertyHandler}
              onImportant={() => taskTogglePropertyHandler(id, 'important')}
              onDelete={() => taskTogglePropertyHandler(id, 'deleted')}
            />
          );

          //     <>
          //   <Route exact path={`/${currentFolder._id}/all`}>
          //     <TaskItem name={name} key={id} />
          //   </Route>
          //   <Route exact path={`/all`}>
          //     <TaskItem name={name} key={id} />
          //   </Route>

          //   {/* <Route exact path={`/${folder}`}>
          //     <TaskItem name={name} />
          //   </Route> */}

          //   <Route
          //     exact
          //     path={`/${folder}/:categoryName`}
          //     render={({ match }) => {
          //       const {
          //         params: { categoryName }
          //       } = match;

          //       return category === categoryName ? (
          //         <TaskItem name={name} key={id} />
          //       ) : null;
          //     }}
          //   />

          //   <Route
          //     exact
          //     path={`/:categoryName`}
          //     render={({ match }) => {
          //       const {
          //         params: { categoryName }
          //       } = match;

          //       return category === categoryName ? <TaskItem name={name} /> : null;
          //     }}
          //   />
          // </>

          if (
            match.url === `/${currentFolder._id}/all` &&
            !completed &&
            !deleted
          ) {
            return element;
          }

          if (
            match.url === `/${currentFolder._id}/today` &&
            createdTime === createDate() &&
            !completed &&
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
            !completed &&
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
