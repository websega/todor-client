import {
  ActionFolderTypes,
  FolderType,
  SET_CURRENT_FOLDER,
  LOAD_FOLDERS,
  SET_COMPLETED_TASK,
  SET_FOLDER,
  TaskType,
  SET_TASK,
  DELETE_TASKS,
  DELETE_FOLDER,
  SET_IMPORTANT_TASK,
  SET_DELETED_TASK,
  CLEAR_FOLDERS,
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

export const setDeletedTask = (
  taskId: string,
  folderId: string
): ActionFolderTypes => ({
  type: SET_DELETED_TASK,
  payload: { taskId, folderId },
});

export const setTask = (
  task: TaskType,
  folderId: string
): ActionFolderTypes => ({
  type: SET_TASK,
  payload: { task, folderId },
});

export const deleteTasks = (
  folderId: string
): ActionFolderTypes => ({
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
