import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { useFormik } from 'formik';

import classNames from 'classnames';

import {
  getValidationSchema,
  validationSchemas,
} from '../../yupSchema/yupSchema';

import {
  registration,
  login,
  addFolder,
  addTask,
} from '../../redux/actions/async';

import { setAuthError } from '../../redux/actions/user/user';

import { InitialUserStateType } from '../../redux/reducers/userReducer';
import { InitialFolderStateType } from '../../redux/reducers/folderReducer';

import getObjectKey from '../../helpers/getObjectKey';

import AuthForm from './AuthForm';
import AddForm from './AddForm';
import FormButton from './FormButton';
import ColorPicker from '../ColorPicker';

import classes from './Form.scss';

type FormPropsType = { formType: string };

type StateType = {
  user: InitialUserStateType;
  folders: InitialFolderStateType;
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

const Form = ({ formType }: FormPropsType): JSX.Element => {
  const dispatch = useDispatch();

  const serverError = useSelector((state: StateType) => state.user.errorMsg);

  const userId = useSelector((state: StateType) => state.user.currentUser.id);

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const [colorId, setColorId] = useState<string>('teal');

  const { errors, values, isValid, handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: '',
      password: '',
      email: '',
      folderName: '',
      taskTitle: '',
    },

    validationSchema: getValidationSchema(validationSchemas, formType),

    onSubmit: ({ username, email, password, folderName, taskTitle }) => {
      switch (formType) {
        case 'registration':
          dispatch(registration(username, email, password));
          break;
        case 'login':
          dispatch(login(email, password));
          break;
        case 'folder':
          dispatch(addFolder(userId, folderName, colorId));
          break;
        case 'task':
          if (currentFolder) {
            dispatch(addTask(taskTitle, currentFolder._id));
          }

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
    <form
      className={classNames(classes.Form, {
        [classes.Modal]: formType === 'folder' || formType === 'task',
      })}
      onSubmit={handleSubmit}
    >
      {(formType === 'registration' || formType === 'login') && (
        <AuthForm
          formType={formType}
          errors={errors}
          serverError={serverError}
          values={values}
          onChange={handleChange}
        />
      )}

      {(formType === 'folder' || formType === 'task') && (
        <AddForm
          formType={formType}
          errors={errors}
          serverError={serverError}
          values={values}
          onChange={handleChange}
        />
      )}

      {formType === 'folder' && (
        <ColorPicker onColorItem={setColorId} activeColorId={colorId} />
      )}

      <FormButton
        name={getObjectKey(buttonNames, formType)}
        disabled={!isValid}
      />

      {formType === 'login' && (
        <NavLink to="/registration" className={classes.Link}>
          <span>Нет аккаунта? Зарегистрируйтесь.</span>
        </NavLink>
      )}

      {formType === 'registration' && (
        <NavLink to="/login" className={classes.Link}>
          <span>Есть аккаунт? Войдите.</span>
        </NavLink>
      )}
    </form>
  );
};

export default Form;
