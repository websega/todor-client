import React, { useState } from 'react';

import classNames from 'classnames';

import CalendarIcon from '../../assets/images/icons/calendar.svg';
import IconButton from '../IconButton';

import classes from './TaskAddForm.scss';
import InputBox from '../InputBox';

const TaskAddForm = (): JSX.Element => {
  const [taskTitle, setTaskTitle] = useState('');

  const handlerSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.dir(taskTitle);
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
