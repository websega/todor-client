const initialState = {
  currentUser: {
    id: '_id_guest',
    email: 'guest@mail.com',
    name: 'Гость',
  },
  isAuth: false,
};

export type CurrentUserType = {
  id: string;
  email: string;
  name: string;
};

export type InitialUserStateType = typeof initialState;

type Action = { type: string; payload: CurrentUserType };

export const userReducer = (
  state: InitialUserStateType = initialState,
  action: Action
): InitialUserStateType => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, currentUser: action.payload, isAuth: true };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: initialState.currentUser,
        isAuth: false,
      };

    default:
      return state;
  }
};
