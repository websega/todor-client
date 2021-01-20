import React from 'react';

import { FormikErrors } from 'formik';

import InputBox from '../../InputBox';
import FormErrorMessage from '../../FormErrorMessage';
import ColorPicker from '../../ColorPicker';

type AddFormProps = {
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
}: AddFormProps): JSX.Element => (
  <>
    <InputBox
      value={modalType === 'task' ? values.taskTitle : values.folderName}
      name={modalType === 'task' ? 'taskTitle' : 'folderName'}
      inputId={modalType === 'task' ? 'taskTitle' : 'folderName'}
      type="text"
      onChange={onChange}
      placeholder={modalType === 'task' ? 'Добавьте задачу' : 'Добавьте папку'}
      hasError={!!errors.taskTitle || !!errors.folderName || !!serverError}
    />

    <FormErrorMessage
      msg={errors.taskTitle || errors.folderName || serverError}
      isIn={!!errors.taskTitle || !!errors.folderName || !!serverError}
    />

    {modalType === 'folder' && <ColorPicker />}
  </>
);

export default AddForm;
