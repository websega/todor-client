import React from 'react';

import classes from './Checkbox.scss';

const Checkbox = (): JSX.Element => {
  const cls = [classes[`borderColor-${activeColor}`]];

  if (completed) {
    cls.push(`bgColor-${activeColor}`);
  }

  return (
    <div className={classes.checkbox}>
      <input
        className={cls.join(' ')}
        type="checkbox"
        name="task-check"
        onChange={onTaskChecked}
        checked={completed}
      />
    </div>
  );
};

export default Checkbox;
