import React from 'react';

import classNames from 'classnames';

import classes from './Checkbox.scss';

type CheckboxPropsType = {
  completed: boolean;
  color: string;
  id: string;
  onComplete: (id: string, completed: boolean) => void;
};

const Checkbox = ({
  completed,
  color,
  id,
  onComplete,
}: CheckboxPropsType): JSX.Element => {
  const checkBoxClickHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onComplete(id, e.currentTarget.checked);
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
