import React, { useCallback } from 'react';

import classes from './InputModal.scss';

type InputModalProps = {
  value: string;
  placeholder: string;
  setValue: (value: string) => void;
};

const InputModal = React.memo(
  ({ value, placeholder, setValue }: InputModalProps): JSX.Element => {
    const changeValue: React.ChangeEventHandler<HTMLInputElement> = useCallback(
      (e) => {
        setValue(e.target.value);
      },
      [setValue]
    );

    return (
      <input
        value={value}
        className={classes.Input}
        onChange={changeValue}
        type="text"
        placeholder={placeholder}
      />
    );
  }
);

InputModal.displayName = 'InputModal';

export default InputModal;
