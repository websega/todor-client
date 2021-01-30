import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { TaskType } from '../../redux/actions/folder/types';
import { completedTask } from '../../redux/actions/user/async';

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

  const checkboxClickHandler = (id: string, completed: boolean) => {
    if (currentFolder) {
      dispatch(completedTask(id, currentFolder._id, completed));
    }
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
        onComplete={checkboxClickHandler}
      />
      <DescriptionTextArea />
    </section>
  );
};

export default Description;
