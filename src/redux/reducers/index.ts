import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import folderReducer from './folderReducer';
import { modalReducer } from './modalReducer';
import { dropdownMenuReducer } from './dropdownMenuReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  folder: folderReducer,
  modal: modalReducer,
  dropdownMenu: dropdownMenuReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>
