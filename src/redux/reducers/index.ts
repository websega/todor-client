import { combineReducers } from 'redux';

import { userReducer } from './userReducer';
import folderReducer from './folderReducer';
import { modalReducer } from './modalReducer';
import { dropdownMenuReducer } from './dropdownMenuReducer';


const rootReducer = combineReducers({
  user: userReducer,
  folder: folderReducer,
  modal: modalReducer,
  dropdownMenu: dropdownMenuReducer,
});

export default rootReducer;
