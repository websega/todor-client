import React from 'react';

import classes from './TimeLabel.scss';

const TimeLabel = (): JSX.Element => (
  <time dateTime="2020-08-03" className={classes.taskDate}>
    000000
  </time>
);

export default TimeLabel;
