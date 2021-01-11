export type CurrentUserType = {
  id: string;
  email: string;
  name: string;
};

export type IntitialStateType = typeof intitialState;

type Action = { type: string; payload: CurrentUserType };

const intitialState = {
  currentUser: {
    id: '_id_guest',
    email: 'guest@mail.com',
    name: 'Гость',
  },
  isAuth: false,
};

const userReducer = (
  state: IntitialStateType = intitialState,
  action: Action
): IntitialStateType => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    case 'SET_USER':
      return { ...state, currentUser: action.payload, isAuth: true };
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        currentUser: intitialState.currentUser,
        isAuth: false,
      };

    default:
      return state;
  }
};

export default userReducer;
