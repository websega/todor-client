import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import {
  getValidationSchema,
  validationSchemas,
} from '../../yupSchema/yupSchema';
import { registration, login } from '../../redux/actions/user/async';
import { setAuthError } from '../../redux/actions/user/user';

import { InitialUserStateType } from '../../redux/reducers/userReducer';

import AuthForm from './AuthForm';
import AddForm from './AddForm';
import ButtonModal from '../ButtonModal';

import classes from './FormWrapper.scss';

type FormProps = { modalType: string };

type StateType = {
  user: InitialUserStateType;
};

type ButtonNamesType = {
  [key: string]: string;
};

const buttonNames: ButtonNamesType = {
  registration: 'Зарегистрироваться',
  login: 'Войти',
  folder: 'Добавить',
  task: 'Добавить',
};

const getButtonName = (names: ButtonNamesType, type: string): string =>
  names[type] || '';

const FormWrapper = ({ modalType }: FormProps): JSX.Element => {
  const serverError = useSelector((state: StateType) => state.user.errorMsg);
  const dispatch = useDispatch();

  const { errors, values, isValid, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      folderName: '',
      taskTitle: '',
    },

    validationSchema: getValidationSchema(validationSchemas, modalType),

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

      <ButtonModal
        name={getButtonName(buttonNames, modalType)}
        disabled={!isValid}
      />
    </form>
  );
};

export default FormWrapper;
