import {
  ActionFolderTypes,
  FolderType,
  SET_FOLDER,
  SET_ALL_FOLDERS,
  SET_FOLDER_WITH_NEW_TASK,
  // TaskType,
  SET_CURRENT_FOLDER,
} from './types';

export const setTask = (folder: FolderType): ActionFolderTypes => ({
  type: SET_FOLDER_WITH_NEW_TASK,
  payload: folder,
});

export const setFolder = (folder: FolderType): ActionFolderTypes => ({
  type: SET_FOLDER,
  payload: folder,
});

export const setAllFolders = (folders: FolderType[]): ActionFolderTypes => ({
  type: SET_ALL_FOLDERS,
  payload: folders,
});

export const setCurrentFolder = (folderId: string): ActionFolderTypes => ({
  type: SET_CURRENT_FOLDER,
  payload: folderId,
});
