import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ActionUserTypes } from './types';
import { ActionModalTypes } from '../modal/types';
import { setAuthError, setUser } from './user';

import { RootStateType } from '../../reducers';
import { closeModal } from '../modal/modal';

type ThunkType = ThunkAction<
  Promise<void>,
  RootStateType,
  unknown,
  Action<ActionUserTypes['type']> | Action<ActionModalTypes['type']>
>;

export const registration = (
  username: string,
  email: string,
  password: string
): ThunkType => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:5000/api/auth/registration',
      {
        username,
        email,
        password,
      }
    );
    // eslint-disable-next-line no-alert
    alert(response.data.message);
    dispatch(closeModal());
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
    throw error.response.data.message;
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
    dispatch(closeModal());

    localStorage.setItem('token', response.data.token);
  } catch (error) {
    dispatch(setAuthError(error.response.data.message));
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
