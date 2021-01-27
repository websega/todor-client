import React from 'react';

import classNames from 'classnames';

import classes from './TaskTitle.scss';

type TaskTitlePropsType = { title: string };

const TaskTitle = ({ title }: TaskTitlePropsType): JSX.Element => (
  <div className={classes.taskTitle}>
    <h3 className={classNames()}>{title}</h3>
  </div>
);

export default TaskTitle;
