import {
  ActionModalTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_DEFAULT_MODAL_TYPE,
  TOGGLE_MENU,
} from './types';

export const openModal = (modalType: string): ActionModalTypes => ({
  type: OPEN_MODAL,
  payload: modalType,
});

export const closeModal = (): ActionModalTypes => ({
  type: CLOSE_MODAL,
});

export const setDefaultModalType = (): ActionModalTypes => ({
  type: SET_DEFAULT_MODAL_TYPE,
});

export const toggleMenu = (): ActionModalTypes => ({
  type: TOGGLE_MENU,
});
