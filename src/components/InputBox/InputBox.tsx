import React, { useEffect, useRef } from 'react';

import classNames from 'classnames';

import classes from './InputBox.scss';

type InputBoxPropsType = {
  value: string;
  name: string;
  type: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  hasFocus?: boolean;
};

const InputBox = React.memo(
  ({
    value,
    placeholder,
    type,
    onChange,
    hasError,
    name,
    hasFocus,
  }: InputBoxPropsType): JSX.Element => {
    const textInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
      if (textInputRef && textInputRef.current && hasFocus) {
        textInputRef.current.focus();
      }
    }, [hasFocus]);

    return (
      <label htmlFor={name}>
        <input
          id={name}
          value={value}
          name={name}
          type={type}
          className={classNames({
            [classes.Input]: true,
            [classes.Warning]: hasError,
          })}
          onChange={onChange}
          placeholder={placeholder}
          ref={textInputRef}
        />
      </label>
    );
  }
);

InputBox.displayName = 'InputModal';

export default InputBox;
