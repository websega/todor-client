import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { clearDeletedTask, destroyFolder } from '../../../redux/actions/async';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';
import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';

import CleanIcon from '../../../assets/images/icons/clean.svg';
import DeleteFolderIcon from '../../../assets/images/icons/delete-folder.svg';

import TaskInfoTitle from './TaskInfoTitle';
import IconButton from '../../IconButton';

import classes from './TaskInfoPanel.scss';
import { setCurrentFolder } from '../../../redux/actions/folder/folder';
import { setCurrentColor } from '../../../redux/actions/system/system';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TaskInfoPanel = (): JSX.Element => {
  const dispatch = useDispatch();

  const history = useHistory();

  const folders = useSelector((state: StateType) => state.folders.folders);

  const currentFolder = useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentColor = useSelector(
    (state: StateType) => state.system.currentColor
  );

  const currentCategory = useSelector(
    (state: StateType) => state.system.currentCategory
  );

  const deleteFolderHandler = useCallback(() => {
    if (!currentFolder) {
      return;
    }

    dispatch(destroyFolder(currentFolder._id));

    if (folders.length) {
      history.push(`/${folders[0]._id}/all`);
      const folderId = folders[0]._id;
      const activeFolder = folders.find((folder) => folderId === folder._id);

      if (activeFolder) {
        dispatch(setCurrentFolder(activeFolder));
        dispatch(setCurrentColor(activeFolder.colorId));
      }
    }
  }, [currentFolder, dispatch, folders, history]);

  const clearDeletedTaskHandler = useCallback(() => {
    if (!currentFolder) {
      return;
    }

    dispatch(clearDeletedTask(currentFolder._id));
  }, [currentFolder, dispatch]);

  return (
    <>
      {currentFolder ? (
        <div
          className={classNames(
            classes.Info,
            classes[`BorderBottomColor-${currentColor}`]
          )}
        >
          <TaskInfoTitle title={currentFolder.name} />

          <div className={classes.Right}>
            <IconButton
              icon={<DeleteFolderIcon />}
              iconType="clean"
              onClick={deleteFolderHandler}
            />

            {currentCategory === 'deleted' && (
              <IconButton
                icon={<CleanIcon />}
                iconType="clean"
                onClick={clearDeletedTaskHandler}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TaskInfoPanel;
