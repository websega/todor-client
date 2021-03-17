import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addTaskDescription } from '../../../redux/actions/async';
import { TaskType } from '../../../redux/actions/folder/types';

import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';

import classes from './DescriptionTextArea.scss';

type StateType = {
  system: InitialSystemStateType;
  folders: InitialFolderStateType;
};

function useDebounce(callback: (value: string) => void, delay: number) {
  const timer = useRef<any>();

  return useCallback(
    (value) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(value);
      }, delay);
    },
    [callback, delay]
  );
}

const DescriptionTextArea = (): JSX.Element => {
  const dispatch = useDispatch();

  const [taskDescr, setTaskDescr] = useState<string>('');

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const sendDescription = (description: string) => {
    if (currentFolder) {
      dispatch(
        addTaskDescription(currentTaskId, currentFolder._id, description)
      );
    }
  };

  const debounсe = useDebounce(sendDescription, 500);

  const currentTaskId = useSelector(
    (state: StateType) => state.system.currentTask
  );

  useEffect(() => {
    if (currentFolder) {
      const currentTask: TaskType | undefined = currentFolder.tasks.find(
        (task) => task.id === currentTaskId
      );

      if (currentTask) {
        setTaskDescr(currentTask.description);
      }
    }
  }, [currentFolder, currentTaskId]);

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
