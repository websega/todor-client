import {
  ActionFolderTypes,
  FolderType,
  SET_CURRENT_FOLDER,
  LOAD_FOLDERS,
  SET_COMPLETED_TASK,
  SET_TASK,
  SET_FOLDER,
} from '../actions/folder/types';

const initialState = {
  folders: [],
  currentFolder: null,
};

export type InitialFolderStateType = {
  folders: FolderType[];
  currentFolder: FolderType | null;
};

const folderReducer = (
  state: InitialFolderStateType = initialState,
  action: ActionFolderTypes
): InitialFolderStateType => {
  switch (action.type) {
    case SET_COMPLETED_TASK: {
      const newFolders = state.folders.map((folder) => {
        if (folder._id === action.payload.folderId) {
          const newTasks = folder.tasks.map((task) => {
            if (task.id === action.payload.taskId) {
              return { ...task, completed: action.payload.completed };
            }

            return task;
          });

          return { ...folder, tasks: newTasks };
        }

        return folder;
      });

      return {
        ...state,
        folders: newFolders,
      };
    }

    case SET_TASK: {
      const newFolders = state.folders.map((folder) => {
        if (folder._id === action.payload.folderId) {
          const newTasks = [...folder.tasks, action.payload.task];
          
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

    default:
      return state;
  }
};

export default folderReducer;
