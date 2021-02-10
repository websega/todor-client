import {
  ActionFolderTypes,
  FolderType,
  SET_CURRENT_FOLDER,
  LOAD_FOLDERS,
  SET_TASK,
  SET_FOLDER,
  DELETE_FOLDER,
  CLEAR_FOLDERS,
  DELETE_TASKS,
  SET_TASK_DESCRIPTION,
  TaskType,
  TOGGLE_TASK_PROPERTY,
} from '../actions/folder/types';

const initialState = {
  folders: [],
  currentFolder: null,
};

export type InitialFolderStateType = {
  folders: FolderType[];
  currentFolder: FolderType | null;
};

const toggleTaskProperty = (
  state: InitialFolderStateType,
  folderId: string,
  taskId: string,
  propName: keyof TaskType
) =>
  state.folders.map((folder) => {
    if (folder._id === folderId) {
      const newTasks = folder.tasks.map((task) =>
        task.id === taskId ? { ...task, [propName]: !task[propName] } : task
      );

      return { ...folder, tasks: newTasks };
    }

    return folder;
  });

const folderReducer = (
  state: InitialFolderStateType = initialState,
  action: ActionFolderTypes
): InitialFolderStateType => {
  switch (action.type) {
    case TOGGLE_TASK_PROPERTY: {
      const { folderId, taskId, propName } = action.payload;

      return {
        ...state,
        folders: toggleTaskProperty(state, folderId, taskId, propName),
      };
    }

    case SET_TASK: {
      const { folderId, task } = action.payload;

      const newFolders = state.folders.map((folder) =>
        folder._id === folderId
          ? { ...folder, tasks: [...folder.tasks, task] }
          : folder
      );

      return {
        ...state,
        folders: newFolders,
      };
    }

    case SET_TASK_DESCRIPTION: {
      const { folderId, taskId, descriptionText } = action.payload;

      const newFolders = state.folders.map((folder) => {
        if (folder._id === folderId) {
          const newTasks = folder.tasks.map((task) =>
            task.id === taskId
              ? { ...task, description: descriptionText }
              : task
          );

          return { ...folder, tasks: newTasks };
        }

        return folder;
      });

      return {
        ...state,
        folders: newFolders,
      };
    }

    case DELETE_TASKS: {
      const newFolders = state.folders.map((folder) => {
        if (folder._id === action.payload) {
          const newTasks = folder.tasks.filter((task) => !task.deleted);

          return { ...folder, tasks: newTasks };
        }

        return folder;
      });

      return {
        ...state,
        folders: newFolders,
      };
    }

    case LOAD_FOLDERS:
      return {
        ...state,
        folders: [...action.payload],
      };

    case SET_FOLDER:
      return {
        ...state,
        folders: [...state.folders, action.payload],
      };

    case SET_CURRENT_FOLDER:
      return {
        ...state,
        currentFolder: action.payload,
      };

    case DELETE_FOLDER: {
      const newFolders = state.folders.filter(
        (folder) => folder._id !== action.payload
      );

      return {
        ...state,
        folders: newFolders,
        currentFolder: null,
      };
    }

    case CLEAR_FOLDERS:
      return initialState;

    default:
      return state;
  }
};

export default folderReducer;
