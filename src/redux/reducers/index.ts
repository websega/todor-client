import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import folderReducer from './folderReducer';
import { modalReducer } from './modalReducer';

const rootReducer = combineReducers({
  user: userReducer,
  folder: folderReducer,
  modal: modalReducer,
});

export default rootReducer;
