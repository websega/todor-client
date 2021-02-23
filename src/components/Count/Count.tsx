import React from 'react';

import classes from './Count.scss';

type CountPropsType = { numberOfTask: number; color: string };

const Count = React.memo(
  ({ numberOfTask, color }: CountPropsType): JSX.Element => (
    <span className={[classes.Count, `bgColor-${color}`].join(' ')}>
      {numberOfTask}
    </span>
  )
);

Count.displayName = 'Count';

export default Count;
