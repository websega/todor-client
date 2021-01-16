import React from 'react';
import { useDispatch } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { closeModal } from '../../redux/actions/modal/modal';
import { registration, login } from '../../redux/actions/user/async';

import InputBox from '../InputBox';
import ButtonModal from '../ButtonModal';
import FormErrorMessage from '../FormErrorMessage';

import classes from './Form.scss';

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

const Form = ({ type }: FormProps): JSX.Element => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
    },

    validationSchema:
      type === 'registration' ? registerationSchema : loginSchema,

    onSubmit: (values) => {
      switch (type) {
        case 'registration':
          registration(values.username, values.email, values.password);
          dispatch(closeModal());
          break;
        case 'login':
          dispatch(login(values.email, values.password));
          dispatch(closeModal());
          break;

        default:
          break;
      }
    },
  });

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
            hasError={!!formik.errors.username}
          />

          <FormErrorMessage
            msg={formik.errors.username}
            isIn={!!formik.errors.username}
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
        hasError={!!formik.errors.email}
      />

      <FormErrorMessage
        msg={formik.errors.email}
        isIn={!!formik.errors.email}
      />

      <InputBox
        value={formik.values.password}
        name="password"
        inputId="password"
        type="password"
        onChange={formik.handleChange}
        placeholder="Пароль"
        hasError={!!formik.errors.password}
      />

      <FormErrorMessage
        msg={formik.errors.password}
        isIn={!!formik.errors.password}
      />

      <ButtonModal name={getButtonName()} disabled={!formik.isValid} />
    </form>
  );
};

export default Form;
