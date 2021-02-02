import React from 'react';

import classes from './TaskInfoTitle.scss';

type TaskInfoTitlePropsType = { title: string };

const TaskInfoTitle = ({ title }: TaskInfoTitlePropsType): JSX.Element => (
  <div className={classes.Title}>
    <h2>{title}</h2>
  </div>
);

export default TaskInfoTitle;
