type FolderStateType = {
  name: string;
  color: string;
};

type Action = { type: string };

const intitialState = {
  name: '',
  color: 'default',
};

const folderReducer = (
  state: FolderStateType = intitialState,
  action: Action
): FolderStateType => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    default:
      return state;
  }
};

export default folderReducer;
