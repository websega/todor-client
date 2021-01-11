import { CurrentUserType } from '../reducers/userReducer';

type ActionSetUserType = { type: string; payload?: CurrentUserType };

export const setUser = (data: CurrentUserType): ActionSetUserType => ({
  type: 'SET_USER',
  payload: data,
});

export const logout = (): ActionSetUserType => ({
  type: 'LOGOUT',
});
