import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FolderType } from '../../redux/actions/folder/types';
import { setCurrentTask } from '../../redux/actions/system/system';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

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

  const currentFolder: FolderType | undefined = folders.find(
    (folder) => folder._id === currentFolderId
  );

  const taskClickHandler = (id: string) => {
    dispatch(setCurrentTask(id));
  };

  return (
    <div className={classes.tasksContainer}>
      {currentFolder &&
        currentFolder.tasks.map((task) => {
          const { id, title, completed, important, date } = task;
          return (
            <Task
              key={id}
              title={title}
              completed={completed}
              important={important}
              date={date}
              currentFolderColor={currentFolder.colorId}
              onClick={() => taskClickHandler(id)}
            />
          );
        })}
    </div>
  );
};

export default TasksList;
