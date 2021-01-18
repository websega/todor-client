import {
  ActionModalTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_DEFAULT_MODAL_TYPE,
  TOGGLE_MENU,
} from '../actions/modal/types';

const initialState = {
  isOpen: false,
  isMenuOpen: false,
  modalType: '',
};

export type InitialModalStateType = typeof initialState;

export const modalReducer = (
  state: InitialModalStateType = initialState,
  action: ActionModalTypes
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

    default:
      return state;
  }
};
