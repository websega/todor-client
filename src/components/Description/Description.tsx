import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { FolderType, TaskType } from '../../redux/actions/folder/types';
import { updateTask } from '../../redux/actions/user/async';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import DescriptionHeader from './DescriptionHeader';
import DescriptionPlug from './DescriptionPlug';
import DescriptionTextArea from './DescriptionTextArea';

import classes from './Description.scss';

type StateType = {
  foldersList: InitialFolderStateType;
  system: InitialSystemStateType;
};

const Description = (): JSX.Element => {
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

  if (!currentFolder) {
    return (
      <section className={classes.Description}>
        <DescriptionPlug />
      </section>
    );
  }

  const currentTask: TaskType | undefined = currentFolder.tasks.find(
    (task) => task.id === currentTaskId
  );

  if (!currentTask) {
    return (
      <section className={classes.Description}>
        <DescriptionPlug />
      </section>
    );
  }

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
    <section className={classes.Description}>
      <DescriptionHeader
        title={currentTask.title}
        inputId={currentTask.id}
        completed={currentTask.completed}
        important={currentTask.important}
        date={currentTask.date}
        currentFolderColor={currentFolder.colorId}
        onChecked={() => checkboxClickHandler(currentTask.id)}
      />
      <DescriptionTextArea />
    </section>
  );
};

export default Description;
