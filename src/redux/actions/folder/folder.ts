import {
  ActionFolderTypes,
  FolderType,
  SET_CURRENT_FOLDER,
  LOAD_FOLDERS,
  SET_TASK,
  ADD_FOLDER
} from './types';

export const setTask = (
  taskId: string,
  folderId: string,
  completed: boolean
): ActionFolderTypes => ({
  type: SET_TASK,
  payload: { taskId, folderId, completed },
});

export const setCurrentFolder = (folder: FolderType): ActionFolderTypes => ({
  type: SET_CURRENT_FOLDER,
  payload: folder,
});

export const addFolder = (folder: FolderType): ActionFolderTypes => ({
  type: ADD_FOLDER,
  payload: folder,
});

export const loadFolders = (folders: FolderType[]): ActionFolderTypes => ({
  type: LOAD_FOLDERS,
  payload: folders,
});
