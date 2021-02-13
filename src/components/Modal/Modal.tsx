import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { InitialSystemStateType } from '../../redux/reducers/systemReducer';
import {
  closeModal,
  setDefaultModalType,
} from '../../redux/actions/system/system';

import HeaderModal from './HeaderModal';
import Form from '../Form';

import getObjectKey from '../../helpers/getObjectKey';

import classes from './Modal.scss';

type TitlesType = {
  [key: string]: string;
};

const headerTitles: TitlesType = {
  folder: 'Добавление папки',
  task: 'Добавление задачи',
};

const DURATION = 690;

type StateType = { system: InitialSystemStateType };

const Modal = (): JSX.Element => {
  const overlayElement = useRef<HTMLDivElement | null>(null);

  const isModalOpen = useSelector(
    (state: StateType) => state.system.isModalOpen
  );

  const modalType = useSelector((state: StateType) => state.system.modalType);
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  /**
   * Changes the type of the modal to the default.
   *
   * Without this function and the onExited parameter in the transition,
   * the type will change and the window title will display the wrong title and
   * also the wrong form will be displayed.
   */
  const exetedModal = useCallback(() => {
    dispatch(setDefaultModalType());
  }, [dispatch]);

  const onEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if ((e.key === 'Escape' || e.key === 'Esc') && isModalOpen) {
        onClose();
      }
    },
    [isModalOpen, onClose]
  );

  const onOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayElement.current) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', onEscapeKey);
    return () => {
      window.removeEventListener('keydown', onEscapeKey);
    };
  }, [onEscapeKey]);

  return (
    <Transition
      in={isModalOpen}
      appear
      timeout={DURATION}
      mountOnEnter
      unmountOnExit
      onExited={exetedModal}
    >
      {(state) => (
        <div
          ref={overlayElement}
          className={classNames(classes.Overlay, classes[`o-${state}`])}
          role="presentation"
          onClick={onOverlayClick}
        >
          <div
            className={classNames(
              classes.Wrapper,
              classes.Modal,
              classes[`m-${state}`]
            )}
          >
            <HeaderModal
              title={getObjectKey(headerTitles, modalType)}
              onClose={onClose}
            />

            <Form formType={modalType} />
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Modal;
