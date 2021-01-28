import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionUserTypes } from './types';
import { ActionModalTypes } from '../modal/types';
import { ActionFolderTypes, FolderType, TaskType } from '../folder/types';
import { RootStateType } from '../../reducers';

import { setAuthError, setUser } from './user';
import { closeModal } from '../modal/modal';
import { setAllFolders, setFolder, setTask } from '../folder/folder';

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  | Action<ActionUserTypes['type']>
  | Action<ActionModalTypes['type'] | ActionFolderTypes['type']>
>;

export const registration = (
  username: string,
  email: string,
  password: string
): ThunkType => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/registration',
      {
        username,
        email,
        password,
      }
    );
    // eslint-disable-next-line no-alert
    alert(response.data.message);
    dispatch(closeModal());
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
    throw error.response.data.message;
  }
};

export const login = (email: string, password: string): ThunkType => async (
  dispatch
) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });

    dispatch(setUser(response.data.user));
    dispatch(closeModal());

    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
  }
};

export const auth = (): ThunkType => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    dispatch(setUser(response.data.user));

    localStorage.setItem('token', response.data.token);
  } catch (error) {
    localStorage.removeItem('token');
  }
};

export const addTask = (task: TaskType, folderId: string): ThunkType => async (
  dispatch
) => {
  try {
    const {
      id,
      title,
      description,
      date,
      completed,
      important,
      deleted,
    } = task;

    const response = await axios.post(
      `http://localhost:5000/api/folder/add-task/${folderId}`,
      {
        id,
        title,
        description,
        date,
        completed,
        important,
        deleted,
      }
    );

    dispatch(setTask(response.data.folder));
  } catch (error) {
    console.log(error);
  }
};

export const getFolders = (userId: string): ThunkType => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/folder/get-all/${userId}`
    );

    dispatch(setAllFolders(response.data.folders));
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
  }
};

export const addFolder = (
  userId: string,
  name: string,
  colorId: string
): ThunkType => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/folder/add-folder',
      {
        userId,
        name,
        colorId,
      }
    );
    // eslint-disable-next-line no-alert
    alert(response.data.message);
    console.log(response.data.folder);
    dispatch(setFolder(response.data.folder));
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
  }
};
