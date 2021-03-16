import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionUserTypes } from './user/types';
import { ActionFolderTypes, TaskType } from './folder/types';
import { ActionSystemTypes } from './system/types';
import { RootStateType } from '../reducers';

import { setAuthError, setUser } from './user/user';
import { closeModal, setCurrentColor } from './system/system';
import {
  loadFolders,
  setFolder,
  setTask,
  deleteFolder,
  deleteTasks,
  setTaskDescription,
  setTaskProperty,
} from './folder/folder';

import createId from '../../utils/createId';
import createDate from '../../utils/createDate';
import APP_URL from '../../constants/constants';

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
    const response = await axios.post(`${APP_URL}api/auth/registration`, {
      username,
      email,
      password,
    });
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
    const response = await axios.post(`${APP_URL}api/auth/login`, {
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
    const response = await axios.get(`${APP_URL}api/auth/auth`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    dispatch(setUser(response.data.user));

    localStorage.setItem('token', response.data.token);
  } catch (error) {
    localStorage.removeItem('token');
  }
};

// ===================================================================

export const uploadAvatar = (file: Blob): ThunkType => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post(`${APP_URL}api/folder/avatar`, formData, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    dispatch(setUser(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteAvatar = (): ThunkType => async (dispatch) => {
  try {
    const response = await axios.delete(`${APP_URL}api/folder/avatar-delete`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    dispatch(setUser(response.data));
  } catch (error) {
    throw new Error(error);
  }
};

// ================================================================

const createTask = (title: string): TaskType => ({
  id: createId(),
  title,
  description: '',
  createdTime: createDate(),
  completed: false,
  important: false,
  deleted: false,
});

export const addTask = (
  taskTitle: string,
  folderId: string
): ThunkType => async (dispatch) => {
  try {
    const newTask = createTask(taskTitle);

    await axios.post(`${APP_URL}api/folder/add-task/?folderId=${folderId}`, {
      ...newTask,
    });

    dispatch(setTask(newTask, folderId));
    dispatch(closeModal());
  } catch (error) {
    throw new Error(error);
  }
};

export const addTaskDescription = (
  taskId: string,
  folderId: string,
  descriptionText: string
): ThunkType => async (dispatch) => {
  try {
    await axios.post(
      `${APP_URL}api/folder/add-task-description/?taskId=${taskId}&folderId=${folderId}`,
      {
        descriptionText,
      }
    );

    dispatch(setTaskDescription(taskId, folderId, descriptionText));
  } catch (error) {
    throw new Error(error);
  }
};

export const toggleTaskProperty = (
  taskId: string,
  folderId: string,
  propName: keyof TaskType
): ThunkType => async (dispatch) => {
  try {
    await axios.patch(
      `${APP_URL}api/folder/task-property/?taskId=${taskId}&folderId=${folderId}&propName=${propName}`
    );

    dispatch(setTaskProperty(taskId, folderId, propName));
  } catch (error) {
    throw new Error(error);
  }
};

export const clearDeletedTask = (folderId: string): ThunkType => async (
  dispatch
) => {
  try {
    await axios.patch(
      `${APP_URL}api/folder/clear-deleted-tasks/?folderId=${folderId}`
    );

    dispatch(deleteTasks(folderId));
  } catch (error) {
    throw new Error(error);
  }
};

// ================================================================

export const fetchFolders = (userId: string): ThunkType => async (dispatch) => {
  try {
    const response = await axios.get(`${APP_URL}api/folder/get-all/${userId}`);

    dispatch(loadFolders(response.data.folders));
  } catch (error) {
    throw new Error(error);
  }
};

export const addFolder = (
  userId: string,
  name: string,
  colorId: string
): ThunkType => async (dispatch) => {
  try {
    const response = await axios.post(`${APP_URL}api/folder/add-folder`, {
      userId,
      name,
      colorId,
    });
    // eslint-disable-next-line no-alert
    alert(response.data.message);
    dispatch(setFolder(response.data.folder));
    dispatch(closeModal());
  } catch (error) {
    throw new Error(error);
  }
};

export const destroyFolder = (folderId: string): ThunkType => async (
  dispatch
) => {
  try {
    const response = await axios.delete(
      `${APP_URL}api/folder/delete-folder/?folderId=${folderId}`
    );

    // eslint-disable-next-line no-alert
    alert(response.data.message);
    dispatch(deleteFolder(folderId));
    dispatch(setCurrentColor('teal'));
  } catch (error) {
    throw new Error(error);
  }
};
