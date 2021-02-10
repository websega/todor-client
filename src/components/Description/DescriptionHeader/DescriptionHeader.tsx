import React from 'react';

import { TaskType } from '../../../redux/actions/folder/types';

import TaskBody from '../../TasksList/Task/TaskBody';

import classes from './DescriptionHeader.scss';

type TaskPropsType = {
  title: string;
  inputId: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
  onComplete: (id: string, propName: keyof TaskType) => void;
  onImportant: () => void;
  onDelete: () => void;
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
  onDelete,
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
      onDelete={onDelete}
    />
  </div>
);

export default DescriptionHeader;
