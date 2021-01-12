import { CurrentUserType } from '../reducers/userReducer';

export type ActionUserType = { type: string; payload?: CurrentUserType };

export const setUser = (data: CurrentUserType): ActionUserType => ({
  type: 'SET_USER',
  payload: data,
});

export const logout = (): ActionUserType => ({
  type: 'LOGOUT',
});
