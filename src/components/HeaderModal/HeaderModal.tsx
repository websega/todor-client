import React from 'react';

import IconButton from '../IconButton';

import CloseIcon from '../../assets/images/icons/close.svg';

import classes from './HeaderModal.scss';

type HeaderModalProps = {
  title: string;
  onClose: () => void;
};

const HeaderModal = ({ title, onClose }: HeaderModalProps): JSX.Element => (
  <div className={classes.Header}>
    <h3>{title}</h3>
    <IconButton icon={<CloseIcon />} iconType="close" onClick={onClose} />
  </div>
);

export default HeaderModal;
