import { CurrentUserType } from '../reducers/userReducer';

type setUserType = { type: string; payload?: CurrentUserType };

export const setUser = (data: CurrentUserType): setUserType => ({
  type: 'SET_USER',
  payload: data,
});

export const logout = (): setUserType => ({
  type: 'LOGOUT',
});
