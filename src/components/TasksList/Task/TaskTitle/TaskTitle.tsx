import React from 'react';

import classes from './TaskTitle.scss';

const TaskTitle = (): JSX.Element=> {
  const classNames = [cls, 'crop-text'];

  return (
    <div className={classes.taskTitle}>
      <h3 className={classNames.join(' ')}>{title}</h3>
    </div>
  );
};

export default TaskTitle;
