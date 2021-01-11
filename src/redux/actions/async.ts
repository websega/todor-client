import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { CurrentUserType } from '../reducers/userReducer';

import { setUser } from './user';

export const registration = async (
  name: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/registration',
      {
        name,
        email,
        password,
      }
    );
    // eslint-disable-next-line no-alert
    alert(response.data.message);
  } catch (error) {
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-alert
    alert(error.response.data.message);
  }
};

export const login = (
  email: string,
  password: string
): ThunkAction<void, CurrentUserType, unknown, Action<string>> => async (
  dispatch
) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/login', {
      email,
      password,
    });
    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
    // eslint-disable-next-line no-console
    console.log(response.data.user);
  } catch (error) {
    // eslint-disable-next-line no-console
    // eslint-disable-next-line no-alert
    alert(error.response.data.message);
  }
};

export const auth = (): ThunkAction<
  void,
  CurrentUserType,
  unknown,
  Action<string>
> => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:5000/api/auth/auth', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });

    dispatch(setUser(response.data.user));
    localStorage.setItem('token', response.data.token);
  } catch (error) {
    localStorage.removeItem('token');
  }
};
