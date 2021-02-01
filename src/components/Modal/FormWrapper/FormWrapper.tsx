import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormik } from 'formik';

import {
  getValidationSchema,
  validationSchemas,
} from '../../../yupSchema/yupSchema';

import {
  registration,
  login,
  addFolder,
  addTask,
} from '../../../redux/actions/user/async';

import { setAuthError } from '../../../redux/actions/user/user';

import { InitialUserStateType } from '../../../redux/reducers/userReducer';
import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';

import getObjectKey from '../../../helpers/getObjectKey';

import AuthForm from './AuthForm';
import AddForm from './AddForm';
import ButtonModal from '../ButtonModal';
import ColorPicker from '../../ColorPicker';

import classes from './FormWrapper.scss';

type FormWrapperPropsType = { modalType: string };

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

const FormWrapper = ({ modalType }: FormWrapperPropsType): JSX.Element => {
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
        name={getObjectKey(buttonNames, modalType)}
        disabled={!isValid}
      />
    </form>
  );
};

export default FormWrapper;
