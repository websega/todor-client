import React from 'react';

import classes from './TaskInfoTitle.scss';

type TaskInfoTitlePropsType = { title: string };

const TaskInfoTitle = React.memo(
  ({ title }: TaskInfoTitlePropsType): JSX.Element => (
    <div className={classes.Title}>
      <h2>{title}</h2>
    </div>
  )
);

TaskInfoTitle.displayName = 'TaskInfoTitle';

export default TaskInfoTitle;
