import React from 'react';

import DotsIcon from '../../../../assets/images/icons/more_dots.svg';
import StarIcon from '../../../../assets/images/icons/star.svg';

import Checkbox from '../../../Checkbox';
import TaskTitle from '../TaskTitle';
import TimeLabel from '../../../TimeLabel';
import IconButton from '../../../IconButton';

import classes from './TaskBody.scss';

const TaskBody = (): JSX.Element => (
    <>
      <div className={classes.left}>
        <Checkbox
          completed={completed}
          onTaskChecked={onTaskChecked}
          activeColor={activeColor}
        />

        <div className={classes.taskInfo}>
          <TaskTitle cls={cls} title={title} />
          <TimeLabel date={date} />
        </div>
      </div>

      <div className={classes.right}>
        <IconButton
          icon={<StarIcon />}
          important={important}
          onClick={onTaskImportant}
        />
        <IconButton
          icon={<DotsIcon />}
          iconType="dots"
          onClick={onOpenContextMenu}
        />
      </div>
    </>
  );

export default TaskBody;
