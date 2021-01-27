import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import folderReducer from './folderReducer';
import { modalReducer } from './modalReducer';


export const rootReducer = combineReducers({
  user: userReducer,
  foldersList: folderReducer,
  modal: modalReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>
