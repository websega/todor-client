import React from 'react';

import TaskBody from './TaskBody';

import classes from './Task.scss';

const Task = (): JSX.Element=> {
  const cls = [classes.task];

  if (selected) {
    cls.push(classes.active);
  }

  return (
    <div className={cls.join(' ')} role="button" tabIndex="0">
      <TaskBody />
    </div>
  );
};

export default Task;
