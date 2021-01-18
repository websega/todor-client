import React from 'react';

import Task from './Task';

import classes from './TasksList.scss';

const TasksList = (): JSX.Element=> {
  return (
    <div className={classes.tasksContainer}>
      {[].map((task) => {
        const { id } = task;
        return <Task key={id} />;
      })}
    </div>
  );
};

export default TasksList;
