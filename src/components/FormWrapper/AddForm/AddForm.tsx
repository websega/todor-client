import React from 'react';

import { FormikErrors } from 'formik';

import InputBox from '../../InputBox';
import FormErrorMessage from '../../FormErrorMessage';
import ColorPicker from '../../ColorPicker';

type AddFormProps = {
  modalType: string;
  errors: FormikErrors<{
    username: string;
    password: string;
    email: string;
  }>;
  values: {
    username: string;
    password: string;
    email: string;
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
}: AddFormProps): JSX.Element => (
  <>
    {modalType === 'task' && (
      <InputBox
        value={values.email}
        name="task-inp"
        inputId="task-inp"
        type="text"
        onChange={onChange}
        placeholder="Добавьте задачу"
        hasError={!!errors.email || !!serverError}
      />
    )}

    {modalType === 'folder' && (
      <InputBox
        value={values.email}
        name="folder-inp"
        inputId="folder-inp"
        type="text"
        onChange={onChange}
        placeholder="Добавьте папку"
        hasError={!!errors.email || !!serverError}
      />
    )}

    <FormErrorMessage
      msg={errors.email || serverError}
      isIn={!!errors.email || !!serverError}
    />

    {modalType === 'folder' && <ColorPicker />}
  </>
);

export default AddForm;
