import {
  ActionFolderTypes,
  FolderType,
  SET_FOLDER,
  SET_ALL_FOLDERS,
  SET_CURRENT_FOLDER,
  SET_FOLDER_WITH_NEW_TASK,
} from '../actions/folder/types';

const initialState = {
  folders: [],
  currentFolder: null,
};

export type InitialFolderStateType = {
  folders: FolderType[];
  currentFolder: string | null;
};

const folderReducer = (
  state: InitialFolderStateType = initialState,
  action: ActionFolderTypes
): InitialFolderStateType => {
  switch (action.type) {
    case SET_FOLDER_WITH_NEW_TASK: {
      const newFolders = state.folders.map((folder) => {
        if (folder._id === action.payload._id) {
          return action.payload;
        }
        return folder;
      });

      return {
        ...state,
        folders: newFolders,
      };
    }
    case SET_FOLDER:
      return {
        ...state,
        folders: [...state.folders, action.payload],
      };
    case SET_ALL_FOLDERS:
      return {
        ...state,
        folders: [...state.folders, ...action.payload],
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
