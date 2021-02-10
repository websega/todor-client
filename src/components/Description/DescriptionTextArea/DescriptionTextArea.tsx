import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTaskDescription } from '../../../redux/actions/user/async';

import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';

import classes from './DescriptionTextArea.scss';

type StateType = {
  system: InitialSystemStateType;
  folders: InitialFolderStateType;
};

type DescriptionTextAreaPropsType = { description: string };

const DescriptionTextArea = ({
  description,
}: DescriptionTextAreaPropsType): JSX.Element => {
  const dispatch = useDispatch();

  const [taskDescr, setTaskDescr] = useState<string>('');

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
  );

  useEffect(() => {
    setTaskDescr(description);
  }, [description]);

  const taskDescriptionHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTaskDescr(e.currentTarget.value);

    if (currentFolder) {
      dispatch(
        addTaskDescription(
          currentTaskId,
          currentFolder._id,
          e.currentTarget.value
        )
      );
    }
  };

  return (
    <textarea
      className={classes.TextInput}
      placeholder="Напишите описание к задаче..."
      onInput={taskDescriptionHandler}
      value={taskDescr}
    />
  );
};

export default DescriptionTextArea;
