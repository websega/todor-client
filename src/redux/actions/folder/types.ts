export const SET_TASK = 'SET_TASK';
export const SET_COMPLETED_TASK = 'SET_COMPLETED_TASK';
export const SET_IMPORTANT_TASK = 'SET_IMPORTANT_TASK';
export const SET_DELETED_TASK = 'SET_DELETED_TASK';

export const SET_FOLDER = 'SET_FOLDER';
export const LOAD_FOLDERS = 'LOAD_FOLDERS';

export const SET_CURRENT_FOLDER = 'SET_CURRENT_FOLDER';

export const CLEAR_FOLDERS = 'CLEAR_FOLDERS';

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

type ActionSetImportantTaskType = {
  type: typeof SET_IMPORTANT_TASK;
  payload: { taskId: string; folderId: string };
};

type ActionSetDeletedTaskType = {
  type: typeof SET_DELETED_TASK;
  payload: { taskId: string; folderId: string };
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

type ActionCleartFoldersType = {
  type: typeof CLEAR_FOLDERS;
};

export type ActionFolderTypes =
  | ActionSetCompletedTaskType
  | ActionSetTaskType
  | ActionSetFolderType
  | ActionFetchFoldersType
  | ActionCurrentFolderType
  | ActionCleartFoldersType
  | ActionSetImportantTaskType
  | ActionSetDeletedTaskType;
