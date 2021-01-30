import React from 'react';
import { useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialSystemStateType } from '../../../redux/reducers/systemReducer';
import { InitialFolderStateType } from '../../../redux/reducers/folderReducer';

import SortIconAB from '../../../assets/images/icons/sort_a-z.svg';
import DotsIcon from '../../../assets/images/icons/more_dots.svg';

import TaskInfoTitle from './TaskInfoTitle';
import IconButton from '../../IconButton';

import classes from './TaskInfoPanel.scss';
import { FolderType } from '../../../redux/actions/folder/types';

type StateType = {
  folders: InitialFolderStateType;
  system: InitialSystemStateType;
};

const TaskInfoPanel = (): JSX.Element => {
  const currentFolder= useSelector(
    (state: StateType) => state.folders.currentFolder
  );

  const currentColor = useSelector(
    (state: StateType) => state.system.currentColor
  );

  return (
    <>
      {currentFolder ? (
        <div
          className={classNames(
            classes.info,
            classes[`borderBottomColor-${currentColor}`]
          )}
        >
          <TaskInfoTitle title={currentFolder.name} />

          <div className={classes.right}>
            <IconButton
              icon={<SortIconAB />}
              iconType="sort"
              onClick={() => console.log('click')}
            />
            <IconButton
              icon={<DotsIcon />}
              iconType="dots"
              onClick={() => console.log('click')}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TaskInfoPanel;
