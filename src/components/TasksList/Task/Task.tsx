import React from 'react';

import classNames from 'classnames';

import TaskBody from './TaskBody';

import classes from './Task.scss';

type TaskPropsType = {
  title: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
  onClick: () => void;
};

const Task = ({
  title,
  completed,
  important,
  date,
  currentFolderColor,
  onClick,
}: TaskPropsType): JSX.Element => (
  <div
    className={classNames(classes.task)}
    role="button"
    tabIndex={0}
    onClick={onClick}
    aria-hidden="true"
  >
    <TaskBody
      title={title}
      completed={completed}
      important={important}
      date={date}
      currentFolderColor={currentFolderColor}
    />
  </div>
);
export default Task;
