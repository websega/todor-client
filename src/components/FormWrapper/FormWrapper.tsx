import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { registration, login } from '../../redux/actions/user/async';
import { setAuthError } from '../../redux/actions/user/user';

import { InitialUserStateType } from '../../redux/reducers/userReducer';

import AuthForm from './AuthForm';
import AddForm from './AddForm';
import ButtonModal from '../ButtonModal';

import classes from './FormWrapper.scss';

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

const addTaskSchema = Yup.object({
  taskTitle: Yup.string()
    .min(4, 'Описание задачи должно быть больше 4 символов!')
    .required('Не может быть пустым!'),
});

const addFolderSchema = Yup.object({
  folderName: Yup.string()
    .min(4, 'Имя папки должно быть больше 4 символов!')
    .max(10, 'Имя папки должно быть меньше 10 символов')
    .required('Не может быть пустым!'),
});

type RegistrationSchemaType = typeof registerationSchema;

type LoginSchemaType = typeof loginSchema;

type AddFolderSchemaType = typeof addFolderSchema;

type AddTaskType = typeof addTaskSchema;

type ValidationSchemasTypes =
  | RegistrationSchemaType
  | LoginSchemaType
  | AddFolderSchemaType
  | AddTaskType;

type FormProps = { modalType: string };

type StateType = {
  user: InitialUserStateType;
};

type ButtonNamesType = {
  [key: string]: string;
};

type ValidationSchemaType = {
  [key: string]: ValidationSchemasTypes;
};

const FormWrapper = ({ modalType }: FormProps): JSX.Element => {
  const serverError = useSelector((state: StateType) => state.user.errorMsg);
  const dispatch = useDispatch();

  const getValidationSchema = (type: string): ValidationSchemasTypes | null => {
    const schemas: ValidationSchemaType = {
      registration: registerationSchema,
      login: loginSchema,
      folder: addFolderSchema,
      task: addTaskSchema,
    };

    return schemas[type] || null;
  };

  const { errors, values, isValid, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      folderName: '',
      taskTitle: '',
    },

    validationSchema: getValidationSchema(modalType),

    onSubmit: ({ username, email, password, folderName, taskTitle }) => {
      switch (modalType) {
        case 'registration':
          dispatch(registration(username, email, password));
          break;
        case 'login':
          dispatch(login(email, password));
          break;
        case 'folder':
          console.log(folderName);
          break;
        case 'task':
          console.log(taskTitle);
          break;

        default:
          break;
      }
    },
  });

  if (serverError && (errors.username || errors.password || errors.email)) {
    dispatch(setAuthError(''));
  }

  const getButtonName = useCallback((type: string): string => {
    const names: ButtonNamesType = {
      registration: 'Зарегистрироваться',
      login: 'Войти',
      folder: 'Добавить',
      task: 'Добавить',
    };

    return names[type] || '';
  }, []);

  return (
    <form className={classes.Form} onSubmit={handleSubmit}>
      {(modalType === 'registration' || modalType === 'login') && (
        <AuthForm
          modalType={modalType}
          errors={errors}
          serverError={serverError}
          values={values}
          onChange={handleChange}
        />
      )}

      {(modalType === 'folder' || modalType === 'task') && (
        <AddForm
          modalType={modalType}
          errors={errors}
          serverError={serverError}
          values={values}
          onChange={handleChange}
        />
      )}

      <ButtonModal name={getButtonName(modalType)} disabled={!isValid} />
    </form>
  );
};

export default FormWrapper;
