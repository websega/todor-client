import React from 'react';

import classes from './TaskInfoTitle.scss';

type TaskInfoTitleProps = { title: string };

const TaskInfoTitle = ({ title }: TaskInfoTitleProps): JSX.Element => (
  <div className={classes.title}>
    <h2 className="crop-text">{title}</h2>
  </div>
);

export default TaskInfoTitle;
