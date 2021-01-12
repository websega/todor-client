import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionUserType, setUser } from './user';
import { RootStateType } from '../reducers';

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  Action<ActionUserType['type']>
>;

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

export const login = (email: string, password: string): ThunkType => async (
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

export const auth = (): ThunkType => async (dispatch) => {
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
