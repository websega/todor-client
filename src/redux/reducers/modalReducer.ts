const initialState = {
  isOpen: false,
  modalType: '',
};

export type InitialModalStateType = typeof initialState;

type Action = { type: string; payload: string };

export const modalReducer = (
  state: InitialModalStateType = initialState,
  action: Action
): InitialModalStateType => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isOpen: true,
        modalType: action.payload,
      };
    case 'SET_TYPE':
      return {
        ...state,
        modalType: '',
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };

    default:
      return state;
  }
};
