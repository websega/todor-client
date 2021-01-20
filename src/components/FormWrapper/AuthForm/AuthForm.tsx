import React from 'react';

import { FormikErrors } from 'formik';

import InputBox from '../../InputBox';
import FormErrorMessage from '../../FormErrorMessage';

type AuthFormProps = {
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

const AuthForm = ({
  modalType,
  errors,
  values,
  onChange,
  serverError,
}: AuthFormProps): JSX.Element => (
  <>
    {modalType === 'registration' && (
      <>
        <InputBox
          value={values.username}
          name="username"
          inputId="username"
          type="text"
          onChange={onChange}
          placeholder="Имя"
          hasError={!!errors.username || !!serverError}
        />

        <FormErrorMessage
          msg={errors.username || serverError}
          isIn={!!errors.username || !!serverError}
        />
      </>
    )}

    <InputBox
      value={values.email}
      name="email"
      inputId="email"
      type="email"
      onChange={onChange}
      placeholder="Электронная почта"
      hasError={!!errors.email || !!serverError}
    />

    <FormErrorMessage
      msg={errors.email || serverError}
      isIn={!!errors.email || !!serverError}
    />

    <InputBox
      value={values.password}
      name="password"
      inputId="password"
      type="password"
      onChange={onChange}
      placeholder="Пароль"
      hasError={!!errors.password || !!serverError}
    />

    <FormErrorMessage
      msg={errors.password || serverError}
      isIn={!!errors.password || !!serverError}
    />
  </>
);

export default AuthForm;
