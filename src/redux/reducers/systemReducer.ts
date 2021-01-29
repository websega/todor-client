import {
  ActionSystemTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_DEFAULT_MODAL_TYPE,
  TOGGLE_MENU,
  SET_CURRENT_FOLDER,
  SET_CURRENT_TASK,
} from '../actions/system/types';

const initialState = {
  isModalOpen: false,
  isMenuOpen: false,
  modalType: '',
  currentFolder: '',
  currentTask: '',
};

export type InitialSystemStateType = typeof initialState;

export const systemReducer = (
  state: InitialSystemStateType = initialState,
  action: ActionSystemTypes
): InitialSystemStateType => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        modalType: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };
    case SET_DEFAULT_MODAL_TYPE:
      return {
        ...state,
        modalType: '',
      };
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    case SET_CURRENT_FOLDER:
      return {
        ...state,
        currentFolder: action.payload,
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };

    default:
      return state;
  }
};