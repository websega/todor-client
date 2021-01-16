import React from 'react';

import classNames from 'classnames';

import classes from './InputBox.scss';

type InputBoxProps = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError: boolean;
  inputId: string;
};

const InputBox = React.memo(
  ({
    value,
    placeholder,
    type,
    onChange,
    hasError,
    name,
    inputId,
  }: InputBoxProps): JSX.Element => (
    <label htmlFor={inputId}>
      <input
        id={inputId}
        value={value}
        name={name}
        type={type}
        className={classNames({
          [classes.Input]: true,
          [classes.Warning]: hasError,
        })}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  )
);

InputBox.displayName = 'InputModal';

export default InputBox;
