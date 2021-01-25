import React from 'react';

import classes from './Count.scss';

type CountPropsType = { numberOfTask: number; color: string };

const Count = ({ numberOfTask, color }: CountPropsType): JSX.Element => (
  <span className={[classes.Count, `bgColor-${color}`].join(' ')}>
    {numberOfTask}
  </span>
);

export default Count;
