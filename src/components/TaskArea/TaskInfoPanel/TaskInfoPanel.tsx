import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import classNames from 'classnames';

import { clearDeletedTask, destroyFolder } from '../../../redux/actions/async';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';
import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';

import SortIconAB from '../../../assets/images/icons/sort_a-z.svg';
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

  const deleteFolderHandler = (id: string) => {
    dispatch(destroyFolder(id));

    if (folders.length) {
      history.push(`/${folders[0]._id}/all`);
      const folderId = folders[0]._id;
      const activeFolder = folders.find((folder) => folderId === folder._id);

      if (activeFolder) {
        dispatch(setCurrentFolder(activeFolder));
        dispatch(setCurrentColor(activeFolder.colorId));
      }
    }
  };

  const clearDeletedTaskHandler = (id: string) => {
    dispatch(clearDeletedTask(id));
  };

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
              icon={<SortIconAB />}
              iconType="sort"
              onClick={() => console.log('click')}
            />
            <IconButton
              icon={<DeleteFolderIcon />}
              iconType="clean"
              onClick={() => deleteFolderHandler(currentFolder._id)}
            />

            {currentCategory === 'deleted' && (
              <IconButton
                icon={<CleanIcon />}
                iconType="clean"
                onClick={() => clearDeletedTaskHandler(currentFolder._id)}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TaskInfoPanel;
