/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';

import { addTask } from '../../../redux/actions/user/async';

import CalendarIcon from '../../../assets/images/icons/calendar.svg';

import IconButton from '../../IconButton';
import InputBox from '../../InputBox';

import classes from './TaskAddForm.scss';

type StateType = {
  foldersList: InitialFolderStateType;
  system: InitialSystemStateType;
  folders: InitialFolderStateType;
};

const TaskAddForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const [taskTitle, setTaskTitle] = useState<string>('');

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentColor = useSelector(
    (state: StateType) => state.system.currentColor
  );

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentFolder) {
      dispatch(addTask(taskTitle, currentFolder._id));
      setTaskTitle('');
    }
  };

  const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };

  return (
    <div className={classes.AddWrapper}>
      <form className={classes.Form} onSubmit={handlerSubmit}>
        <button
          className={classNames(classes.AddBtn, `bgColor-${currentColor}`)}
          type="submit"
        >
          {' '}
        </button>

        <InputBox
          name="inp-add-task"
          value={taskTitle}
          type="text"
          placeholder="Добавьте задачу"
          onChange={handlerChange}
        />

        <div className={classes.CalendarBtn}>
          <IconButton
            icon={<CalendarIcon />}
            onClick={() => {
              console.log('calendar');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskAddForm;
