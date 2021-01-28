import React from 'react';
import { useSelector } from 'react-redux';

import { FolderType, TaskType } from '../../redux/actions/folder/types';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import DescriptionHeader from '../DescriptionHeader';
import DescriptionPlug from '../DescriptionPlug';
import DescriptionTextArea from '../DescriptionTextArea';

import classes from './Description.scss';

type StateType = {
  foldersList: InitialFolderStateType;
  system: InitialSystemStateType;
};

const Description = (): JSX.Element => {
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

  if (!currentFolder) {
    return (
      <section className={classes.description}>
        <DescriptionPlug />
      </section>
    );
  }

  const currentTask: TaskType | undefined = currentFolder.tasks.find(
    (task) => task.id === currentTaskId
  );

  if (!currentTask) {
    return (
      <section className={classes.description}>
        <DescriptionPlug />
      </section>
    );
  }

  return (
    <section className={classes.description}>
      <DescriptionHeader
        title={currentTask.title}
        completed={currentTask.completed}
        important={currentTask.important}
        date={currentTask.date}
        currentFolderColor={currentFolder.colorId}
      />
      <DescriptionTextArea />
    </section>
  );
};

export default Description;
