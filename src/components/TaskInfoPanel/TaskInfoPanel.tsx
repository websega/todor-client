import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import SortIconAB from '../../assets/images/icons/sort_a-z.svg';
import DotsIcon from '../../assets/images/icons/more_dots.svg';

import TaskInfoTitle from './TaskInfoTitle';
import IconButton from '../IconButton';

import classes from './TaskInfoPanel.scss';

type StateType = {
  system: InitialSystemStateType;
};

const TaskInfoPanel = (): JSX.Element => {
  const currentColor = useSelector(
    (state: StateType) => state.system.currentColor
  );

  return (
    <div
      className={classNames(
        classes.info,
        classes[`borderBottomColor-${currentColor}`]
      )}
    >
      <TaskInfoTitle title="TaskInfoTitle" />

      <div className={classes.right}>
        <IconButton
          icon={<SortIconAB />}
          iconType="sort"
          onClick={() => console.log('click')}
        />
        <IconButton
          icon={<DotsIcon />}
          iconType="dots"
          onClick={() => console.log('click')}
        />
      </div>
    </div>
  );
};

export default TaskInfoPanel;
