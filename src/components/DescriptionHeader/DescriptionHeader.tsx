import React from 'react';

import TaskBody from '../TasksList/Task/TaskBody';

import classes from './DescriptionHeader.scss';

type TaskPropsType = {
  title: string;
  inputId: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
  onChecked: () => void;
};

const DescriptionHeader = ({
  title,
  inputId,
  completed,
  important,
  date,
  currentFolderColor,
  onChecked,
}: TaskPropsType): JSX.Element => (
  <div className={classes.header}>
    <TaskBody
      title={title}
      inputId={inputId}
      completed={completed}
      important={important}
      date={date}
      currentFolderColor={currentFolderColor}
      onChecked={onChecked}
    />
  </div>
);

export default DescriptionHeader;
