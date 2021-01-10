/* eslint-disable import/prefer-default-export */
interface ILogin {
  id: string;
  name: string;
  email: string;
}

type setUserType = { type: string; payload?: ILogin };

export const setUser = (data: ILogin): setUserType => ({
  type: 'SET_USER',
  payload: data,
});

export const logout = (): setUserType => ({
  type: 'LOGOUT',
});
