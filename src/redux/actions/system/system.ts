import {
  ActionSystemTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_TASK,
  SET_DEFAULT_MODAL_TYPE,
  TOGGLE_MENU,
  SET_CURRENT_COLOR,
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

export const setCurrentCategory = (categoryId: string): ActionSystemTypes => ({
  type: SET_CURRENT_CATEGORY,
  payload: categoryId,
});

export const setCurrentTask = (taskId: string): ActionSystemTypes => ({
  type: SET_CURRENT_TASK,
  payload: taskId,
});

export const setCurrentColor = (color: string): ActionSystemTypes => ({
  type: SET_CURRENT_COLOR,
  payload: color,
});
