import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import classNames from 'classnames';
import { Transition } from 'react-transition-group';

import { InitialModalStateType } from '../../redux/reducers/modalReducer';
import { closeModal, setDefaultType } from '../../redux/actions/modal/modal';

import HeaderModal from '../HeaderModal';
import Form from '../Form';

import classes from './Modal.scss';

type StateType = { modal: InitialModalStateType };

const DURATION = 690;

const Modal = (): JSX.Element => {
  const overlayElement = useRef<HTMLDivElement | null>(null);

  const isOpen = useSelector((state: StateType) => state.modal.isOpen);
  const modalType = useSelector((state: StateType) => state.modal.modalType);
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
    dispatch(setDefaultType());
  }, [dispatch]);

  const onEscapeKey = useCallback(
    (e: KeyboardEvent) => {
      if ((e.key === 'Escape' || e.key === 'Esc') && isOpen) {
        onClose();
      }
    },
    [isOpen, onClose]
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

  const getHeaderTitle = (): string =>
    modalType === 'registration' ? 'Регистрация' : 'Вход';

  return (
    <Transition
      in={isOpen}
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
            className={classNames({
              [classes.Auth]: modalType === 'registration' || 'login',
              [classes.Modal]: true,
              [classes[`m-${state}`]]: true,
            })}
          >
            <HeaderModal title={getHeaderTitle()} onClose={onClose} />
            <Form type={modalType} />
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Modal;
