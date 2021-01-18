import React from 'react';
import { useDispatch } from 'react-redux';

import classNames from 'classnames';

import { openModal } from '../../redux/actions/modal/modal';

import classes from './AddButton.scss';

type AddButtonProps = { label: string; modalType: string };

const AddButton = ({ label, modalType }: AddButtonProps): JSX.Element => {
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
