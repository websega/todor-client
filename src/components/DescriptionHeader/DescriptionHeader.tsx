import React from 'react';

import TaskBody from '../TasksList/Task/TaskBody';

import classes from './DescriptionHeader.scss';

type TaskPropsType = {
  title: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
};

const DescriptionHeader = ({
  title,
  completed,
  important,
  date,
  currentFolderColor,
}: TaskPropsType): JSX.Element => (
  <div className={classes.header}>
    <TaskBody
      title={title}
      completed={completed}
      important={important}
      date={date}
      currentFolderColor={currentFolderColor}
    />
  </div>
);

export default DescriptionHeader;
