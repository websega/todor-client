import React from 'react';

import classes from './TimeLabel.scss';

type TimeLabelPropsType = { date: string };

const TimeLabel = ({ date }: TimeLabelPropsType): JSX.Element => (
  <time dateTime="2020-08-03" className={classes.taskDate}>
    {date}
  </time>
);

export default TimeLabel;
