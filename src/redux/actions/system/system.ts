import {
  ActionSystemTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_CURRENT_CATEGORY,
  SET_CURRENT_TASK,
  SET_DEFAULT_MODAL_TYPE,
  SET_CURRENT_COLOR,
  SET_POSITION_CONTEXT_MENU,
  CLEAR,
  PositionType,
  TOGGLE_SIDE_BAR,
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

export const setPositionContextMenu = (
  position: PositionType
): ActionSystemTypes => ({
  type: SET_POSITION_CONTEXT_MENU,
  payload: position,
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

export const clear = (): ActionSystemTypes => ({
  type: CLEAR,
});

export const toggleSidebar = (): ActionSystemTypes => ({
  type: TOGGLE_SIDE_BAR,
});
