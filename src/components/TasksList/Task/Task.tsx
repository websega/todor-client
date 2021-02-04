import React from 'react';

import classNames from 'classnames';

import TaskBody from './TaskBody';

import classes from './Task.scss';

type TaskPropsType = {
  title: string;
  inputId: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
  onClick: (e: React.MouseEvent) => void;
  onComplete: (id: string, completed: boolean) => void;
  onImportant: () => void;
  onDelete: () => void;
  active?: boolean;
};

const Task = ({
  title,
  inputId,
  completed,
  important,
  date,
  currentFolderColor,
  onClick,
  onComplete,
  onImportant,
  onDelete,
  active,
}: TaskPropsType): JSX.Element => (
  <div
    className={classNames(classes.Task, { [classes.Active]: active })}
    role="button"
    tabIndex={0}
    onClick={onClick}
    aria-hidden="true"
  >
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
export default Task;
