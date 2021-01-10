import { combineReducers } from 'redux';

import userReducer from './userReducer';
import folderReducer from './folderReducer';

const rootReducer = combineReducers({
  user: userReducer,
  folder: folderReducer,
});

export default rootReducer;
