export const SET_TASK = 'SET_TASK';
export const SET_FOLDER = 'SET_FOLDER';
export const SET_ALL_FOLDERS = 'SET_ALL_FOLDERS';

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

type ActionSetTaskType = { type: typeof SET_TASK; payload: TaskType };
type ActionSetFolderType = { type: typeof SET_FOLDER; payload: FolderType };
type ActionFetchFoldersType = {
  type: typeof SET_ALL_FOLDERS;
  payload: FolderType[];
};

export type ActionFolderTypes =
  | ActionSetTaskType
  | ActionSetFolderType
  | ActionFetchFoldersType;
