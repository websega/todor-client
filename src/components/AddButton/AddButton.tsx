import React from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import { openModal } from '../../redux/actions/system/system';

import classes from './AddButton.scss';

type AddButtonPropsType = { label: string; modalType: string };

const AddButton = ({ label, modalType }: AddButtonPropsType): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <button
      className={classNames({
        [classes.Button]: true,
        [classes.TaskBtn]: modalType === 'task',
        [classes.FolderBtn]: modalType === 'folder',
      })}
      type="button"
      onClick={() => {
        dispatch(openModal(modalType));
      }}
    >
      {label}
    </button>
  );
};

export default AddButton;
