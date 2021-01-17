import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { registration, login } from '../../redux/actions/user/async';

import InputBox from '../InputBox';
import ButtonModal from '../ButtonModal';
import FormErrorMessage from '../FormErrorMessage';

import classes from './Form.scss';
import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { setAuthError } from '../../redux/actions/user/user';

const registerationSchema = Yup.object({
  username: Yup.string()
    .min(4, 'Имя должно быть больше 4 символов!')
    .max(15, 'Имя должно быть меньше 15 символов!')
    .matches(
      /^[\S\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{3,}$/,
      'Нельзя использовать никакие символы, кроме букв, цифр и подчеркивания!'
    )
    .required('Имя обязательно!'),
  password: Yup.string()
    .min(4, 'Пароль дожен быть больше 4 символов!')
    .max(15, 'Пароль дожен быть меньше 15 символов!')
    .matches(
      /^[a-zA-Z-0-9]\w{3,}$/,
      'Нельзя использовать никакие символы, кроме букв, цифр и подчеркивания!'
    )
    .required('Пароль обязателен!'),
  email: Yup.string()
    .email('Не подходящий формат email!')
    .required('Email обязателен!'),
});

const loginSchema = Yup.object({
  password: Yup.string()
    .min(4, 'Пароль дожен быть больше 4 символов!')
    .max(15, 'Пароль дожен быть меньше 15 символов!')
    .required('Введите пароль!'),
  email: Yup.string()
    .email('Не подходящий формат email')
    .required('Введите email!'),
});

type FormProps = { type: string };
type StateType = {
  user: InitialUserStateType;
};

const Form = ({ type }: FormProps): JSX.Element => {
  const serverError = useSelector((state: StateType) => state.user.errorMsg);
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },

    validationSchema:
      type === 'registration' ? registerationSchema : loginSchema,

    onSubmit: ({ username, email, password }) => {
      switch (type) {
        case 'registration':
          dispatch(registration(username, email, password));
          break;
        case 'login':
          dispatch(login(email, password));
          break;

        default:
          break;
      }
    },
  });

  if (
    serverError &&
    (formik.errors.username || formik.errors.password || formik.errors.email)
  ) {
    dispatch(setAuthError(''));
  }

  const getButtonName = (): string =>
    type === 'registration' ? 'Зарегистрироваться' : 'Войти';

  return (
    <form className={classes.Form} onSubmit={formik.handleSubmit}>
      {type === 'registration' && (
        <>
          <InputBox
            value={formik.values.username}
            name="username"
            inputId="username"
            type="text"
            onChange={formik.handleChange}
            placeholder="Имя"
            hasError={!!formik.errors.username || !!serverError}
          />

          <FormErrorMessage
            msg={formik.errors.username || serverError}
            isIn={!!formik.errors.username || !!serverError}
          />
        </>
      )}

      <InputBox
        value={formik.values.email}
        name="email"
        inputId="email"
        type="email"
        onChange={formik.handleChange}
        placeholder="Электронная почта"
        hasError={!!formik.errors.email || !!serverError}
      />

      <FormErrorMessage
        msg={formik.errors.email || serverError}
        isIn={!!formik.errors.email || !!serverError}
      />

      <InputBox
        value={formik.values.password}
        name="password"
        inputId="password"
        type="password"
        onChange={formik.handleChange}
        placeholder="Пароль"
        hasError={!!formik.errors.password || !!serverError}
      />

      <FormErrorMessage
        msg={formik.errors.password || serverError}
        isIn={!!formik.errors.password || !!serverError}
      />

      <ButtonModal name={getButtonName()} disabled={!formik.isValid} />
    </form>
  );
};

export default Form;
