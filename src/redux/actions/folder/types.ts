export const SET_TASK = 'SET_TASK';
export const SET_TASK_DESCRIPTION = 'SET_TASK_DESCRIPTION';

export const TOGGLE_TASK_PROPERTY = 'TOGGLE_TASK_PROPERTY';

export const DELETE_TASKS = 'DELETE_TASKS';

export const SET_FOLDER = 'SET_FOLDER';
export const LOAD_FOLDERS = 'LOAD_FOLDERS';

export const SET_CURRENT_FOLDER = 'SET_CURRENT_FOLDER';

export const DELETE_FOLDER = 'DELETE_FOLDER';
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

type ActionSetTaskPropertyType = {
  type: typeof TOGGLE_TASK_PROPERTY;
  payload: { taskId: string; folderId: string; propName: keyof TaskType };
};

type ActionDeleteTasksType = {
  type: typeof DELETE_TASKS;
  payload: string;
};

type ActionSetTaskType = {
  type: typeof SET_TASK;
  payload: { task: TaskType; folderId: string };
};

type ActionSetTaskDescriptionType = {
  type: typeof SET_TASK_DESCRIPTION;
  payload: { taskId: string; folderId: string; descriptionText: string };
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

type ActionDeleteFolderType = {
  type: typeof DELETE_FOLDER;
  payload: string;
};

type ActionClearFoldersType = {
  type: typeof CLEAR_FOLDERS;
};

export type ActionFolderTypes =
  | ActionSetTaskType
  | ActionSetFolderType
  | ActionFetchFoldersType
  | ActionCurrentFolderType
  | ActionDeleteFolderType
  | ActionClearFoldersType
  | ActionDeleteTasksType
  | ActionSetTaskDescriptionType
  | ActionSetTaskPropertyType;
