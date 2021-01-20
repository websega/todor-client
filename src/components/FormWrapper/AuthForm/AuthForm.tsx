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
}: AuthFormProps): JSX.Element => {
  const hasUsernameError = !!errors.username || !!serverError;
  const hasPasswordError = !!errors.password || !!serverError;
  const hasEmailError = !!errors.email || !!serverError;

  return (
    <>
      {modalType === 'registration' && (
        <>
          <InputBox
            value={values.username}
            name="username"
            type="text"
            onChange={onChange}
            placeholder="Имя"
            hasError={hasUsernameError}
          />

          <FormErrorMessage
            msg={errors.username || serverError}
            isIn={hasUsernameError}
          />
        </>
      )}

      <InputBox
        value={values.email}
        name="email"
        type="email"
        onChange={onChange}
        placeholder="Электронная почта"
        hasError={hasPasswordError}
      />

      <FormErrorMessage
        msg={errors.email || serverError}
        isIn={hasPasswordError}
      />

      <InputBox
        value={values.password}
        name="password"
        type="password"
        onChange={onChange}
        placeholder="Пароль"
        hasError={hasEmailError}
      />

      <FormErrorMessage
        msg={errors.password || serverError}
        isIn={hasEmailError}
      />
    </>
  );
};

export default AuthForm;
