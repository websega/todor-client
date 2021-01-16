export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export type DataType = { id: string; email: string; username: string };

type ActionUserType = { type: typeof SET_USER; payload: DataType };
type ActionLogoutType = { type: typeof LOGOUT };
type ActionErrorType = { type: typeof LOGIN_ERROR; payload: string };

export type ActionUserTypes =
  | ActionUserType
  | ActionLogoutType
  | ActionErrorType;
