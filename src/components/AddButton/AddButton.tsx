import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';

import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

import { openModal } from '../../redux/actions/system/system';

import classes from './AddButton.scss';

type AddButtonPropsType = { label: string; modalType: string };

type StateType = {
  system: InitialSystemStateType;
};

const AddButton = ({ label, modalType }: AddButtonPropsType): JSX.Element => {
  const dispatch = useDispatch();

  const isMinifiedSidebar = useSelector(
    (state: StateType) => state.system.isMinifiedSidebar
  );

  return (
    <button
      className={classNames({
        [classes.Button]: true,
        [classes.TaskBtn]: modalType === 'task',
        [classes.FolderBtn]: modalType === 'folder',
        [classes.TaskBtnHide]: isMinifiedSidebar && modalType === 'task',
        [classes.FolderBtnHide]: isMinifiedSidebar && modalType === 'folder',
      })}
      type="button"
      onClick={() => {
        dispatch(openModal(modalType));
      }}
    >
      {!isMinifiedSidebar ? label : ''}
    </button>
  );
};

export default AddButton;
