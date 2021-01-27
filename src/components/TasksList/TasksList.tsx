import React from 'react';
import { useSelector } from 'react-redux';

import { FolderType } from '../../redux/actions/folder/types';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';

import Task from './Task';

import classes from './TasksList.scss';

type StateType = {
  foldersList: InitialFolderStateType;
};

const TasksList = (): JSX.Element => {
  const folders = useSelector((state: StateType) => state.foldersList.folders);
  const currentFolderId = useSelector(
    (state: StateType) => state.foldersList.currentFolder
  );

  const currentFolder: FolderType | undefined = folders.find(
    (folder) => folder._id === currentFolderId
  );

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
            />
          );
        })}
    </div>
  );
};

export default TasksList;
