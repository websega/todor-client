import {
  ActionFolderTypes,
  FolderType,
  SET_CURRENT_FOLDER,
  LOAD_FOLDERS,
  SET_COMPLETED_TASK,
  SET_FOLDER,
  TaskType,
  SET_TASK,
  CLEAR_FOLDERS,
  SET_IMPORTANT_TASK,
} from './types';

export const setCompletedTask = (
  taskId: string,
  folderId: string,
  completed: boolean
): ActionFolderTypes => ({
  type: SET_COMPLETED_TASK,
  payload: { taskId, folderId, completed },
});

export const setImportantTask = (
  taskId: string,
  folderId: string
): ActionFolderTypes => ({
  type: SET_IMPORTANT_TASK,
  payload: { taskId, folderId },
});

export const setTask = (
  task: TaskType,
  folderId: string
): ActionFolderTypes => ({
  type: SET_TASK,
  payload: { task, folderId },
});

export const setCurrentFolder = (folder: FolderType): ActionFolderTypes => ({
  type: SET_CURRENT_FOLDER,
  payload: folder,
});

export const setFolder = (folder: FolderType): ActionFolderTypes => ({
  type: SET_FOLDER,
  payload: folder,
});

export const loadFolders = (folders: FolderType[]): ActionFolderTypes => ({
  type: LOAD_FOLDERS,
  payload: folders,
});

export const clearFolders = (): ActionFolderTypes => ({
  type: CLEAR_FOLDERS,
});
