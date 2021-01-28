import {
  ActionSystemTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_CURRENT_FOLDER,
  SET_DEFAULT_MODAL_TYPE,
  TOGGLE_MENU,
} from './types';

export const openModal = (modalType: string): ActionSystemTypes => ({
  type: OPEN_MODAL,
  payload: modalType,
});

export const closeModal = (): ActionSystemTypes => ({
  type: CLOSE_MODAL,
});

export const setDefaultModalType = (): ActionSystemTypes => ({
  type: SET_DEFAULT_MODAL_TYPE,
});

export const toggleMenu = (): ActionSystemTypes => ({
  type: TOGGLE_MENU,
});

export const setCurrentFolder = (folderId: string): ActionSystemTypes => ({
  type: SET_CURRENT_FOLDER,
  payload: folderId,
});
