export const SET_TASK = 'SET_TASK';
export const ADD_FOLDER = 'ADD_FOLDER';
export const LOAD_FOLDERS = 'LOAD_FOLDERS';

export const SET_CURRENT_FOLDER = 'SET_CURRENT_FOLDER';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  important: boolean;
  deleted: boolean;
};

export type FolderType = {
  _id: string;
  userId: string;
  name: string;
  colorId: string;
  tasks: Array<TaskType>;
  _v?: number;
};

type ActionSetFolderWithNewTaskType = {
  type: typeof SET_TASK;
  payload: { taskId: string; folderId: string; completed: boolean };
};

type ActionAddFolderType = { type: typeof ADD_FOLDER; payload: FolderType };

type ActionFetchFoldersType = {
  type: typeof LOAD_FOLDERS;
  payload: FolderType[];
};

type ActionCurrentFolderType = {
  type: typeof SET_CURRENT_FOLDER;
  payload: FolderType;
};

export type ActionFolderTypes =
  | ActionSetFolderWithNewTaskType
  | ActionAddFolderType
  | ActionFetchFoldersType
  | ActionCurrentFolderType;
