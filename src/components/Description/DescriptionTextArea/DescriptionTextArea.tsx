import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTaskDescription } from '../../../redux/actions/async';

import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';

import classes from './DescriptionTextArea.scss';

type StateType = {
  system: InitialSystemStateType;
  folders: InitialFolderStateType;
};

type DescriptionTextAreaPropsType = { description: string };

function useDebounce(callback: any, delay: number) {
  const timer = useRef<any>();

  return useCallback(
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );
}

const DescriptionTextArea = ({
  description,
}: DescriptionTextAreaPropsType): JSX.Element => {
  const dispatch = useDispatch();

  const [taskDescr, setTaskDescr] = useState<string>('');

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const sendDescription = () => {
    if (currentFolder) {
      dispatch(
        addTaskDescription(currentTaskId, currentFolder._id, taskDescr)
      );
    }
  };

  const debounсe = useDebounce(sendDescription, 500);

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
    debounсe(e.currentTarget.value);
  };

  return (
    <textarea
      className={classes.TextInput}
      placeholder="Напишите описание к задаче..."
      onChange={taskDescriptionHandler}
      value={taskDescr}
    />
  );
};

export default DescriptionTextArea;
