import {
  ActionFolderTypes,
  FolderType,
  SET_CURRENT_FOLDER,
  LOAD_FOLDERS,
  SET_FOLDER,
  TaskType,
  SET_TASK,
  DELETE_TASKS,
  DELETE_FOLDER,
  CLEAR_FOLDERS,
  SET_TASK_DESCRIPTION,
  TOGGLE_TASK_PROPERTY,
} from './types';

export const setTaskProperty = (
  taskId: string,
  folderId: string,
  propName: keyof TaskType
): ActionFolderTypes => ({
  type: TOGGLE_TASK_PROPERTY,
  payload: { taskId, folderId, propName },
});

export const setTask = (
  task: TaskType,
  folderId: string
): ActionFolderTypes => ({
  type: SET_TASK,
  payload: { task, folderId },
});

export const setTaskDescription = (
  taskId: string,
  folderId: string,
  descriptionText: string
): ActionFolderTypes => ({
  type: SET_TASK_DESCRIPTION,
  payload: { taskId, folderId, descriptionText },
});

export const deleteTasks = (folderId: string): ActionFolderTypes => ({
  type: DELETE_TASKS,
  payload: folderId,
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

export const deleteFolder = (folderId: string): ActionFolderTypes => ({
  type: DELETE_FOLDER,
  payload: folderId,
});

export const clearFolders = (): ActionFolderTypes => ({
  type: CLEAR_FOLDERS,
});
