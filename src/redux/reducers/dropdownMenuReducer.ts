const initialState = {
  isOpen: false,
};

export type InitialDropdownStateType = typeof initialState;

type Action = { type: string; payload: string };

export const dropdownMenuReducer = (
  state: InitialDropdownStateType = initialState,
  action: Action
): InitialDropdownStateType => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen };

    default:
      return state;
  }
};
