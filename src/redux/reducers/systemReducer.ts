import {
  ActionSystemTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_DEFAULT_MODAL_TYPE,
  TOGGLE_MENU,
  SET_CURRENT_FOLDER,
} from '../actions/system/types';

const initialState = {
  isOpen: false,
  isMenuOpen: false,
  modalType: '',
  currentFolder: '',
};

export type InitialModalStateType = typeof initialState;

export const systemReducer = (
  state: InitialModalStateType = initialState,
  action: ActionSystemTypes
): InitialModalStateType => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
        modalType: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
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

    default:
      return state;
  }
};
