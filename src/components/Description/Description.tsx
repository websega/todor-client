import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { toggleTaskProperty } from '../../redux/actions/async';
import { TaskType } from '../../redux/actions/folder/types';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import DescriptionHeader from './DescriptionHeader';
import DescriptionPlug from './DescriptionPlug';
import DescriptionTextArea from './DescriptionTextArea';

import classes from './Description.scss';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const Description = (): JSX.Element => {
  const dispatch = useDispatch();
  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
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

  const taskTogglePropertyHandler = (
    taskId: string,
    propName: keyof TaskType
  ) => {
    if (currentFolder) {
      dispatch(toggleTaskProperty(taskId, currentFolder._id, propName));
    }
  };

  return (
    <section className={classes.Description}>
      <DescriptionHeader
        title={currentTask.title}
        inputId={currentTask.id}
        completed={currentTask.completed}
        important={currentTask.important}
        date={currentTask.createdTime}
        currentFolderColor={currentFolder.colorId}
        onComplete={() =>
          taskTogglePropertyHandler(currentTask.id, 'completed')
        }
        onImportant={() =>
          taskTogglePropertyHandler(currentTask.id, 'important')
        }
        onDelete={() => taskTogglePropertyHandler(currentTask.id, 'deleted')}
      />
      <DescriptionTextArea description={currentTask.description} />
    </section>
  );
};

export default Description;
