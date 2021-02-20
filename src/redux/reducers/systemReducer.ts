import {
  ActionSystemTypes,
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_DEFAULT_MODAL_TYPE,
  SET_CURRENT_TASK,
  SET_CURRENT_COLOR,
  SET_CURRENT_CATEGORY,
  CLEAR,
} from '../actions/system/types';

const initialState = {
  isModalOpen: false,
  modalType: '',
  currentTask: '',
  currentColor: 'teal',
  currentCategory: '',
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

    case SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };

    case SET_CURRENT_COLOR:
      return {
        ...state,
        currentColor: action.payload,
      };

    case SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };

    case CLEAR:
      return initialState;

    default:
      return state;
  }
};
