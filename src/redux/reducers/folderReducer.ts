import {
  ActionFolderTypes,
  FolderType,
  SET_FOLDER,
  SET_TASK,
  SET_ALL_FOLDERS,
} from '../actions/folder/types';

const initialState = {
  folders: [
    // {
    //   _id: 'folder-1',
    //   userId: 'guest-1',
    //   name: 'Продукты',
    //   colorId: 'red',
    //   tasks: [
    //     {
    //       id: 'guest-folder-task-1',
    //       title: 'Купить молока',
    //       description: '',
    //       date: '',
    //       completed: false,
    //       important: false,
    //       deleted: false,
    //     },
    //   ],
    // },
  ],
  currentFolder: null,
};

export type InitialFolderStateType = {
  folders: FolderType[];
  currentFolder: string | null;
};
// export type InitialFolderStateType = typeof initialState;

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
    default:
      return state;
  }
};

export default folderReducer;
