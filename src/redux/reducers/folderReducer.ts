const initialState = {
  name: '',
  color: 'default',
};

export type InitialFolderStateType = typeof initialState;

type Action = { type: string };

const folderReducer = (
  state: InitialFolderStateType = initialState,
  action: Action
): InitialFolderStateType => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    default:
      return state;
  }
};

export default folderReducer;
