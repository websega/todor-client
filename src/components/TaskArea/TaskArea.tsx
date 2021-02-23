import React from 'react';

import TaskInfoPanel from './TaskInfoPanel';
import TaskAddForm from './TaskAddForm';
import TasksList from '../TasksList';

import classes from './TaskArea.scss';

const TaskArea = React.memo(
  (): JSX.Element => (
    <section className={classes.TasksArea}>
      <TaskInfoPanel />
      <TaskAddForm />
      <TasksList />
    </section>
  )
);

TaskArea.displayName = 'TaskArea';

export default TaskArea;
