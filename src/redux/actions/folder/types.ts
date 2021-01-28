export const SET_FOLDER_WITH_NEW_TASK = 'SET_FOLDER_WITH_NEW_TASK';
export const SET_FOLDER = 'SET_FOLDER';
export const SET_ALL_FOLDERS = 'SET_ALL_FOLDERS';
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
  type: typeof SET_FOLDER_WITH_NEW_TASK;
  payload: FolderType;
};

type ActionSetFolderType = { type: typeof SET_FOLDER; payload: FolderType };

type ActionFetchFoldersType = {
  type: typeof SET_ALL_FOLDERS;
  payload: FolderType[];
};

type ActionCurrentFolderType = {
  type: typeof SET_CURRENT_FOLDER;
  payload: string;
};

export type ActionFolderTypes =
  | ActionSetFolderWithNewTaskType
  | ActionSetFolderType
  | ActionFetchFoldersType
  | ActionCurrentFolderType;
