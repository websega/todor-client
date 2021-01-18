import React from 'react';

import CalendarIcon from '../../assets/images/icons/calendar.svg';

import IconButton from '../IconButton';

import classes from './TaskAddForm.scss';

const TaskAddForm = (): JSX.Element => {
  const cls = [classes.plusBtn, `bgColor-${'red'}`];

  return (
    <div className={classes.taskAdd}>
      <form className={classes.taskInput}>
        <button className={cls.join(' ')} type="submit">
          {' '}
        </button>

        <input id="inp-add-task" type="text" placeholder="Добавьте задачу" />

        <div className={classes.calendarBtn}>
          <IconButton
            icon={<CalendarIcon />}
            onClick={() => {
              console.log('task add form');
            }}
          />
        </div>
      </form>
    </div>
  );
};

export default TaskAddForm;
