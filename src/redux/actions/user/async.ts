import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionUserTypes } from './types';
import { ActionFolderTypes, TaskType } from '../folder/types';
import { ActionSystemTypes } from '../system/types';
import { RootStateType } from '../../reducers';

import { setAuthError, setUser } from './user';
import { closeModal } from '../system/system';
import { loadFolders, addFolder, setTask } from '../folder/folder';

import createId from '../../../utils/createId';
import createDate from '../../../utils/createDate';

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  | Action<ActionUserTypes['type']>
  | Action<ActionSystemTypes['type'] | ActionFolderTypes['type']>
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

// ================================================================

const createTask = (title: string): TaskType => ({
  id: createId(),
  title,
  description: '',
  date: createDate(),
  completed: false,
  important: false,
  deleted: false,
});

export const addTask = (
  taskTitle: string,
  folderId: string
): ThunkType => async (dispatch) => {
  try {
    const {
      id,
      title,
      description,
      date,
      completed,
      important,
      deleted,
    } = createTask(taskTitle);

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

    // dispatch(setTask(response.data.folder));
    // dispatch(closeModal());
  } catch (error) {
    console.log(error);
  }
};

export const completedTask = (
  taskId: string,
  folderId: string,
  completed: boolean
): ThunkType => async (dispatch) => {
  try {
    await axios.patch(
      `http://localhost:5000/api/folder/completed-task/?taskId=${taskId}&folderId=${folderId}`,
      { completed }
    );

    dispatch(setTask(taskId, folderId, completed));
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
  }
};

export const fetchFolders = (userId: string): ThunkType => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/api/folder/get-all/${userId}`
    );

    dispatch(loadFolders(response.data.folders));
  } catch (error) {
    console.log(error);
  }
};

export const fetchFolder = (
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
    dispatch(addFolder(response.data.folder));
    dispatch(closeModal());
  } catch (error) {
    console.log(error);
  }
};
