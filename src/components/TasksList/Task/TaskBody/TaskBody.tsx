import React from 'react';

import TrashIcon from '../../../../assets/images/icons/delete.svg';
import StarIcon from '../../../../assets/images/icons/star.svg';

import Checkbox from '../../../Checkbox';
import TaskTitle from '../TaskTitle';
import TimeLabel from '../../../TimeLabel';
import IconButton from '../../../IconButton';

import classes from './TaskBody.scss';

type TaskBodyPropsType = {
  title: string;
  inputId: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
  onComplete: (id: string, completed: boolean) => void;
  onImportant: () => void;
  onDelete: () => void;
};

const TaskBody = ({
  title,
  inputId,
  completed,
  important,
  date,
  currentFolderColor,
  onComplete,
  onImportant,
  onDelete,
}: TaskBodyPropsType): JSX.Element => (
  <>
    <div className={classes.left}>
      <Checkbox
        completed={completed}
        color={currentFolderColor}
        onComplete={onComplete}
        id={inputId}
      />

      <div className={classes.taskInfo}>
        <TaskTitle title={title} />
        <TimeLabel date={date} />
      </div>
    </div>

    <div className={classes.right}>
      <IconButton
        icon={<StarIcon />}
        important={important}
        iconType="important"
        onClick={onImportant}
      />
      <IconButton icon={<TrashIcon />} iconType="dots" onClick={onDelete} />
    </div>
  </>
);

export default TaskBody;
