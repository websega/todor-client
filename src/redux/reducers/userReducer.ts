interface ICurrentUser {
  id: string;
  email: string;
  name: string;
}

export interface IUserState {
  currentUser: ICurrentUser;
  isAuth: boolean;
}

const intitialState = {
  currentUser: {
    id: '_id_guest',
    email: 'guest@mail.com',
    name: 'Гость',
  },
  isAuth: false,
};

type Action = { type: string; payload: ICurrentUser };

const userReducer = (
  state: IUserState = intitialState,
  action: Action
): IUserState => {
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
