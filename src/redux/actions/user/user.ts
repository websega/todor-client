import {
  ActionUserTypes,
  LOGIN_ERROR,
  LOGOUT,
  SET_USER,
  DataType,
} from './types';

export const setUser = (data: DataType): ActionUserTypes => ({
  type: SET_USER,
  payload: data,
});

export const logout = (): ActionUserTypes => ({
  type: LOGOUT,
});

export const loginError = (error: string): ActionUserTypes => ({
  type: LOGIN_ERROR,
  payload: error,
});
