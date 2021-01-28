import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import folderReducer from './folderReducer';
import { systemReducer } from './systemReducer';

export const rootReducer = combineReducers({
  user: userReducer,
  foldersList: folderReducer,
  system: systemReducer,
});

export type RootStateType = ReturnType<typeof rootReducer>;
