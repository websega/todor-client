import {
  ActionFolderTypes,
  FolderType,
  SET_FOLDER,
  SET_TASK,
  SET_ALL_FOLDERS,
  SET_CURRENT_FOLDER,
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
    case SET_TASK:
      return {
        ...state,
      };
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
