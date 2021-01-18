import React from 'react';

import SortIconAB from '../../assets/images/icons/sort_a-z.svg';
import DotsIcon from '../../assets/images/icons/more_dots.svg';

import TaskInfoTitle from './TaskInfoTitle';
import IconButton from '../IconButton';

import classes from './TaskInfoPanel.scss';

const TaskInfoPanel = (): JSX.Element => {
  const cls = [classes.info, classes[`borderBottomColor-${'red'}`]];

  return (
    <div className={cls.join(' ')}>
      <TaskInfoTitle title="TaskInfoTitle" />

      <div className={classes.right}>
        <IconButton icon={<SortIconAB />} iconType="sort" onClick={() => {}} />
        <IconButton icon={<DotsIcon />} iconType="dots" onClick={() => {}} />
      </div>
    </div>
  );
};

export default TaskInfoPanel;
