import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { setCurrentFolder } from '../../redux/actions/folder/folder';
import { FolderType } from '../../redux/actions/folder/types';

import { setCurrentColor } from '../../redux/actions/system/system';

import { fetchFolders } from '../../redux/actions/user/async';

import { InitialFolderStateType } from '../../redux/reducers/folderReducer';
import { InitialSystemStateType } from '../../redux/reducers/systemReducer';
import { InitialUserStateType } from '../../redux/reducers/userReducer';

import FolderItem from './FolderItem';

import classes from './FoldersList.scss';

type StateType = {
  folders: InitialFolderStateType;
  user: InitialUserStateType;
  system: InitialSystemStateType;
};

const FoldersList = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const folders = useSelector((state: StateType) => state.folders.folders);

  const userId = useSelector((state: StateType) => state.user.currentUser.id);

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  useEffect(() => {
    if (userId) {
      dispatch(fetchFolders(userId));
    }
  }, [dispatch, userId]);

  const folderClickHandler = useCallback(
    (folder: FolderType) => {
      history.push(`/folder/${folder._id}`);
    },
    [history]
  );

  useEffect(() => {
    const folderId = location.pathname.split('folder/')[1];

    if (folders.length) {
      const activeFolder = folders.find((folder) => folderId === folder._id);

      if (activeFolder) {
        dispatch(setCurrentFolder(activeFolder));
        dispatch(setCurrentColor(activeFolder.colorId));
      }
    }
  }, [dispatch, folders, location.pathname]);

  return (
    <nav className={classes.FolderList}>
      {folders.length > 0 &&
        folders.map((folder) => {
          const { _id, colorId, name, tasks } = folder;

          return (
            <FolderItem
              key={_id}
              color={colorId}
              name={name}
              numberOfTask={tasks.length}
              active={currentFolder ? currentFolder._id === _id : false}
              onClick={() => folderClickHandler(folder)}
            />
          );
        })}
    </nav>
  );
};

export default FoldersList;
