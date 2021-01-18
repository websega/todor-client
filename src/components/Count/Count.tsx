import React from 'react';

import classes from './Count.scss';

const Count = ({ count, color }): JSX.Element=> (
  <span className={[classes.count, `bgColor-${color}`].join(' ')}>{count}</span>
);

export default Count;
