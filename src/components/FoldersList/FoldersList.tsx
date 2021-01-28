import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentFolder } from '../../redux/actions/system/system';

import { getFolders } from '../../redux/actions/user/async';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import FolderItem from './FolderItem';

import classes from './FoldersList.scss';

type StateType = {
  foldersList: InitialFolderStateType;
  user: InitialUserStateType;
};

const FoldersList = (): JSX.Element => {
  const folders = useSelector((state: StateType) => state.foldersList.folders);
  const userId = useSelector((state: StateType) => state.user.currentUser.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFolders(userId));
  }, [dispatch, userId]);

  const folderClickHandler = (id: string) => {
    dispatch(setCurrentFolder(id));
  };

  return (
    <nav className={classes.FolderList}>
      {folders.map((folder) => {
        const { _id, colorId, name, tasks } = folder;

        return (
          <FolderItem
            key={_id}
            color={colorId}
            name={name}
            numberOfTask={tasks.length}
            onClick={() => folderClickHandler(_id)}
          />
        );
      })}
    </nav>
  );
};

export default FoldersList;
