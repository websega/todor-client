import React from 'react';

import classNames from 'classnames';

import classes from './Checkbox.scss';

type CheckboxPropsType = {
  completed: boolean;
  color: string;
  id: string;
  onChecked: () => void;
};

const Checkbox = ({
  completed,
  color,
  id,
  onChecked,
}: CheckboxPropsType): JSX.Element => (
  <label htmlFor={id} className={classes.checkbox}>
    <input
      id={id}
      className={classNames({
        [classes[`borderColor-${color}`]]: true,
        [`bgColor-${color}`]: completed,
      })}
      type="checkbox"
      name="task-check"
      checked={completed}
      onChange={onChecked}
    />
  </label>
);
export default Checkbox;
