import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import {
  getValidationSchema,
  validationSchemas,
} from '../../yupSchema/yupSchema';

import {
  registration,
  login,
  addFolder,
  addTask,
} from '../../redux/actions/user/async';

import { setAuthError } from '../../redux/actions/user/user';

import { InitialUserStateType } from '../../redux/reducers/userReducer';

import getElementLabel from '../../helpers/getElementLabel';

import AuthForm from './AuthForm';
import AddForm from './AddForm';
import ButtonModal from '../ButtonModal';

import classes from './FormWrapper.scss';
import ColorPicker from '../ColorPicker';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

type FormWrapperPropsType = { modalType: string };

type StateType = {
  user: InitialUserStateType;
  system: InitialSystemStateType;
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

const FormWrapper = ({ modalType }: FormWrapperPropsType): JSX.Element => {
  const serverError = useSelector((state: StateType) => state.user.errorMsg);
  const userId = useSelector((state: StateType) => state.user.currentUser.id);
  const currentFolderId = useSelector(
    (state: StateType) => state.system.currentFolder
  );
  const [colorId, setColorId] = useState<string>('teal');
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
          dispatch(addFolder(userId, folderName, colorId));
          break;
        case 'task':
          dispatch(addTask(taskTitle, currentFolderId));
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

      {modalType === 'folder' && (
        <ColorPicker onColorItem={setColorId} activeColorId={colorId} />
      )}

      <ButtonModal
        name={getElementLabel(buttonNames, modalType)}
        disabled={!isValid}
      />
    </form>
  );
};

export default FormWrapper;
