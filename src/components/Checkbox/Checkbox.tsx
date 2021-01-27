import React from 'react';

import classNames from 'classnames';

import classes from './Checkbox.scss';

type CheckboxPropsType = { completed: boolean; color: string };

const Checkbox = ({ completed, color }: CheckboxPropsType): JSX.Element => (
  <div className={classes.checkbox}>
    <input
      className={classNames({
        [classes[`borderColor-${color}`]]: true,
        [`bgColor-${color}`]: completed,
      })}
      type="checkbox"
      name="task-check"
      checked={completed}
    />
  </div>
);
export default Checkbox;
