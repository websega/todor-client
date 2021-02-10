import React from 'react';
import classNames from 'classnames';

import { TaskType } from '../../redux/actions/folder/types';

import classes from './Checkbox.scss';

type CheckboxPropsType = {
  completed: boolean;
  color: string;
  id: string;
  onComplete: (id: string, propName: keyof TaskType) => void;
};

const Checkbox = ({
  completed,
  color,
  id,
  onComplete,
}: CheckboxPropsType): JSX.Element => {
  const checkBoxClickHandler = () => {
    onComplete(id, 'completed');
  };

  return (
    <label htmlFor={id} className={classes.Checkbox}>
      <input
        id={id}
        className={classNames({
          [classes[`BorderColor-${color}`]]: true,
          [`bgColor-${color}`]: completed,
        })}
        type="checkbox"
        name="task-check"
        checked={completed}
        onChange={checkBoxClickHandler}
      />
    </label>
  );
};
export default Checkbox;
