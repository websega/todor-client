import {
  ActionModalTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_TYPE,
  TOGGLE_MENU,
} from './types';

export const openModal = (modalType: string): ActionModalTypes => ({
  type: OPEN_MODAL,
  payload: modalType,
});

export const closeModal = (): ActionModalTypes => ({
  type: CLOSE_MODAL,
});

export const setDefaultType = (): ActionModalTypes => ({
  type: SET_TYPE,
});

export const toggleMenu = (): ActionModalTypes => ({
  type: TOGGLE_MENU,
});
