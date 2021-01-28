import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { TaskType } from '../../redux/actions/folder/types';
import { addTask } from '../../redux/actions/user/async';

import CalendarIcon from '../../assets/images/icons/calendar.svg';

import IconButton from '../IconButton';
import InputBox from '../InputBox';

import createId from '../../utils/createId';
import createDate from '../../utils/createDate';

import classes from './TaskAddForm.scss';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';

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
};

const TaskAddForm = (): JSX.Element => {
  const [taskTitle, setTaskTitle] = useState('');
  const currentFolderId = useSelector(
    (state: StateType) => state.foldersList.currentFolder
  );
  const dispatch = useDispatch();

  const handlerSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const newTask = createTask(taskTitle);

    dispatch(addTask(newTask, currentFolderId));
  };

  const handlerChange = (e: React.SyntheticEvent) => {
    setTaskTitle(e.target.value);
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
