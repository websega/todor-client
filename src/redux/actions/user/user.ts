import {
  ActionUserTypes,
  AUTH_ERROR,
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

export const setAuthError = (error: string): ActionUserTypes => ({
  type: AUTH_ERROR,
  payload: error,
});
