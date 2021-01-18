import React from 'react';

import classes from './TimeLabel.scss';

const TimeLabel = (): JSX.Element => {
  const capitalLetter = date.slice(0, 1).toUpperCase();
  const restStr = date.slice(1);
  const newDate = `${capitalLetter}${restStr}`;

  return (
    <time dateTime="2020-08-03" className={classes.taskDate}>
      {newDate}
    </time>
  );
};

export default TimeLabel;
