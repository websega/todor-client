/* eslint-disable no-console */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { TaskType } from '../../redux/actions/folder/types';
import { addTask } from '../../redux/actions/user/async';

import CalendarIcon from '../../assets/images/icons/calendar.svg';

import IconButton from '../IconButton';
import InputBox from '../InputBox';

import createId from '../../utils/createId';
import createDate from '../../utils/createDate';

import classes from './TaskAddForm.scss';

const createTask = (title: string): TaskType => ({
  id: createId(),
  title,
  description: '',
  date: createDate(),
  completed: false,
  important: false,
  deleted: false,
});

type StateType = {
  foldersList: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TaskAddForm = (): JSX.Element => {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const currentFolderId = useSelector(
    (state: StateType) => state.system.currentFolder
  );
  const dispatch = useDispatch();

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTask = createTask(taskTitle);

    dispatch(addTask(newTask, currentFolderId));
  };

  const handlerChange = (e: React.FormEvent<HTMLInputElement>) => {
    setTaskTitle(e.currentTarget.value);
  };

  return (
    <div className={classes.AddWrapper}>
      <form className={classes.Form} onSubmit={handlerSubmit}>
        <button
          className={classNames(classes.AddBtn, `bgColor-${'red'}`)}
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
