interface IFolderState {
  name: string;
  color: string;
}

const intitialState = {
  name: '',
  color: 'default',
};

type Action = { type: string };

const folderReducer = (
  state: IFolderState = intitialState,
  action: Action
): IFolderState => {
  // eslint-disable-next-line sonarjs/no-small-switch
  switch (action.type) {
    default:
      return state;
  }
};

export default folderReducer;
