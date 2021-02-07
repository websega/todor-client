import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { destroyFolder } from '../../../redux/actions/user/async';
import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';
import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';

import SortIconAB from '../../../assets/images/icons/sort_a-z.svg';
import CleanIcon from '../../../assets/images/icons/clean.svg';
import DeleteFolderIcon from '../../../assets/images/icons/delete-folder.svg';

import TaskInfoTitle from './TaskInfoTitle';
import IconButton from '../../IconButton';

import classes from './TaskInfoPanel.scss';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TaskInfoPanel = (): JSX.Element => {
  const dispatch = useDispatch();
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
                onClick={() => console.log('clear deleted')}
              />
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TaskInfoPanel;
