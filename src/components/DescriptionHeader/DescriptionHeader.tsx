import React from 'react';

import TaskBody from '../TasksList/Task/TaskBody';

import classes from './DescriptionHeader.scss';

const DescriptionHeader = (): JSX.Element => (
    <div className={classes.header}>
      <TaskBody />
    </div>
  );

export default DescriptionHeader;
