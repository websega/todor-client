export const SET_TASK = 'SET_TASK';
export const SET_COMPLETED_TASK = 'SET_COMPLETED_TASK';
export const SET_FOLDER = 'SET_FOLDER';
export const LOAD_FOLDERS = 'LOAD_FOLDERS';

export const SET_CURRENT_FOLDER = 'SET_CURRENT_FOLDER';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  createdTime: string;
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

type ActionSetCompletedTaskType = {
  type: typeof SET_COMPLETED_TASK;
  payload: { taskId: string; folderId: string; completed: boolean };
};

type ActionSetTaskType = {
  type: typeof SET_TASK;
  payload: { task: TaskType; folderId: string };
};

type ActionSetFolderType = { type: typeof SET_FOLDER; payload: FolderType };

type ActionFetchFoldersType = {
  type: typeof LOAD_FOLDERS;
  payload: FolderType[];
};

type ActionCurrentFolderType = {
  type: typeof SET_CURRENT_FOLDER;
  payload: FolderType;
};

export type ActionFolderTypes =
  | ActionSetCompletedTaskType
  | ActionSetTaskType
  | ActionSetFolderType
  | ActionFetchFoldersType
  | ActionCurrentFolderType;
