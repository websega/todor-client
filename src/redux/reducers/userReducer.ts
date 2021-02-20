import {
  ActionUserTypes,
  AUTH_ERROR,
  LOGOUT,
  SET_USER,
} from '../actions/user/types';

const initialState = {
  currentUser: {
    id: '',
    email: '',
    username: 'Гость',
    avatar: '',
  },
  isAuth: false,
  errorMsg: '',
  hasError: false,
};

export type InitialUserStateType = typeof initialState;

export const userReducer = (
  state: InitialUserStateType = initialState,
  action: ActionUserTypes
): InitialUserStateType => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload,
        isAuth: true,
        errorMsg: '',
        hasError: false,
      };

    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: initialState.currentUser,
        isAuth: false,
      };

    case AUTH_ERROR:
      return {
        ...state,
        errorMsg: action.payload,
        hasError: true,
      };

    default:
      return state;
  }
};
