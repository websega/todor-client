import React from 'react';

import TaskInfoPanel from '../TaskInfoPanel';
import TaskAddForm from '../TaskAddForm';
import TasksList from '../TasksList';

import classes from './TaskArea.scss';

const TaskArea = (): JSX.Element => (
  <section className={classes.tasksArea}>
    <TaskInfoPanel />
    <TaskAddForm />
    <TasksList />
  </section>
);

export default TaskArea;
