import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { FolderType } from '../../redux/actions/folder/types';
import { setCurrentTask } from '../../redux/actions/system/system';
import { updateTask } from '../../redux/actions/user/async';

import Task from './Task';

import classes from './TasksList.scss';

type StateType = {
  foldersList: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TasksList = (): JSX.Element => {
  const dispatch = useDispatch();

  const folders = useSelector((state: StateType) => state.foldersList.folders);

  const currentFolderId = useSelector(
    (state: StateType) => state.system.currentFolder
  );
  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
  );

  const currentFolder: FolderType | undefined = folders.find(
    (folder) => folder._id === currentFolderId
  );

  const taskClickHandler = (e: React.MouseEvent, id: string) => {
    console.dir(e.currentTarget);

    if (e.currentTarget.nodeName !== 'DIV') {
      return;
    }

    dispatch(setCurrentTask(id));
  };

  const checkboxClickHandler = (id: string) => {
    if (!currentFolder) {
      return;
    }

    const newTasks = currentFolder.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    const updatedTask = newTasks.find((task) => task.id === id);

    if (!updatedTask) {
      return;
    }

    dispatch(updateTask(updatedTask, currentFolderId));
  };

  return (
    <div className={classes.TasksContainer}>
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
              onChecked={() => checkboxClickHandler(id)}
            />
          );
        })}
    </div>
  );
};

export default TasksList;
