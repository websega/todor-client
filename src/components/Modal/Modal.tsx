import React, { useCallback, useEffect, useRef } from 'react';

import classNames from 'classnames';

import { Transition } from 'react-transition-group';

import HeaderModal from '../HeaderModal';
import Form from '../Form';

import classes from './Modal.scss';

type ModalProps = {
  onClose: () => void;
  onVisible: () => void;
  isOpen: boolean;
  type: string;
};

const Modal = ({
  onClose,
  onVisible,
  isOpen,
  type,
}: ModalProps): JSX.Element => {
  const overlayElement = useRef<HTMLDivElement | null>(null);

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

  const getHeaderTitle = useCallback(
    (): string => (type === 'registration' ? 'Регистрация' : 'Вход'),
    [type]
  );

  return (
    <Transition
      in={isOpen}
      appear
      timeout={690}
      mountOnEnter
      unmountOnExit
      onExited={onVisible}
    >
      {(state) => (
        <div
          ref={overlayElement}
          className={[classes.Overlay, classes[`o-${state}`]].join(' ')}
          role="presentation"
          onClick={onOverlayClick}
        >
          <div
            className={classNames({
              [classes.Auth]: type === 'registration' || 'login',
              [classes.Modal]: true,
              [classes[`m-${state}`]]: true,
            })}
          >
            <HeaderModal title={getHeaderTitle()} onClose={onClose} />
            <Form type={type} onClose={onClose}/>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Modal;
