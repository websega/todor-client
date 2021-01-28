import React from 'react';

import DotsIcon from '../../../../assets/images/icons/more_dots.svg';
import StarIcon from '../../../../assets/images/icons/star.svg';

import Checkbox from '../../../Checkbox';
import TaskTitle from '../TaskTitle';
import TimeLabel from '../../../TimeLabel';
import IconButton from '../../../IconButton';

import classes from './TaskBody.scss';

type TaskPropsType = {
  title: string;
  completed: boolean;
  important: boolean;
  date: string;
  currentFolderColor: string;
};

const TaskBody = ({
  title,
  completed,
  important,
  date,
  currentFolderColor,
}: TaskPropsType): JSX.Element => (
  <>
    <div className={classes.left}>
      <Checkbox completed={completed} color={currentFolderColor} />

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
        onClick={() => console.log('click important')}
      />
      <IconButton
        icon={<DotsIcon />}
        iconType="dots"
        onClick={() => console.log('click context menu')}
      />
    </div>
  </>
);

export default TaskBody;
