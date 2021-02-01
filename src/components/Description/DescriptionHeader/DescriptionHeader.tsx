import React from 'react';

import TaskBody from '../../TasksList/Task/TaskBody';

import classes from './DescriptionHeader.scss';

type TaskPropsType = {
  title: string;
  inputId: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
  onComplete: (id: string, completed: boolean) => void;
  onImportant: () => void;
};

const DescriptionHeader = ({
  title,
  inputId,
  completed,
  important,
  date,
  currentFolderColor,
  onComplete,
  onImportant,
}: TaskPropsType): JSX.Element => (
  <div className={classes.Header}>
    <TaskBody
      title={title}
      inputId={inputId}
      completed={completed}
      important={important}
      date={date}
      currentFolderColor={currentFolderColor}
      onComplete={onComplete}
      onImportant={onImportant}
    />
  </div>
);

export default DescriptionHeader;
