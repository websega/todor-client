export const SET_USER = 'SET_USER';
export const LOGOUT = 'LOGOUT';
export const AUTH_ERROR = 'AUTH_ERROR';

export type DataType = {
  id: string;
  email: string;
  username: string;
  avatar: string;
};

type ActionUserType = { type: typeof SET_USER; payload: DataType };
type ActionLogoutType = { type: typeof LOGOUT };
type ActionErrorType = { type: typeof AUTH_ERROR; payload: string };

export type ActionUserTypes =
  | ActionUserType
  | ActionLogoutType
  | ActionErrorType;
