import React from 'react';

import { FormikErrors } from 'formik';

import InputBox from '../../InputBox';
import FormErrorMessage from '../../FormErrorMessage';

type AddFormPropsType = {
  modalType: string;
  errors: FormikErrors<{
    taskTitle: 'string';
    folderName: 'string';
  }>;
  values: {
    taskTitle: string;
    folderName: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  serverError: string;
};

const AddForm = ({
  modalType,
  errors,
  values,
  onChange,
  serverError,
}: AddFormPropsType): JSX.Element => {
  const name = modalType === 'task' ? 'taskTitle' : 'folderName';

  const value = modalType === 'task' ? values.taskTitle : values.folderName;

  const placeholder =
    modalType === 'task' ? 'Добавьте задачу' : 'Добавьте папку';

  const hasError = !!errors.taskTitle || !!errors.folderName || !!serverError;

  const errorMsg = errors.taskTitle || errors.folderName || serverError;

  return (
    <>
      <InputBox
        value={value}
        name={name}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        hasError={hasError}
        hasFocus
      />

      <FormErrorMessage msg={errorMsg} isIn={hasError} />
    </>
  );
};

export default AddForm;
