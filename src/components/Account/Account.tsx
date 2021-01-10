import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom';

import AccountImg from './AccountImg';
import AccountName from './AccountName';
import DropdownMenu from '../DropdownMenu';
import IconButton from '../IconButton';
import Modal from '../Modal';

import ArrowIcon from '../../assets/images/icons/arrow_down.svg';

import classes from './Account.scss';

type AccountProps = {
  username: string;
};

const modalRoot = document.getElementById('modal-root') as HTMLElement;

const Account = React.memo(
  ({ username }: AccountProps): JSX.Element => {
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [visibleModal, setVisibleModal] = useState<boolean>(false);
    const [typeModal, setTypeModal] = useState<string>('');

    const closeModal = useCallback(() => {
      setIsOpenModal(false);
    }, []);

    const toggleMenu = useCallback(() => {
      setIsOpenMenu(!isOpenMenu);
    }, [isOpenMenu]);

    const showModal = useCallback(() => {
      setVisibleModal(true);
      setIsOpenModal(true);
      setIsOpenMenu(false);
    }, []);

    const setType = useCallback(
      (type: string) => {
        setTypeModal(type);
        showModal();
      },
      [showModal]
    );

    /**
     * Hides the modal.
     * Without this function and the onExited parameter in Transition,
     * the window will be closed without waiting for the animation to complete.
     */
    const exetedModal = useCallback(() => {
      setVisibleModal(false);
    }, []);

    return (
      <>
        <div className={classes.Account}>
          <div className={classes.User}>
            <AccountImg />
            <AccountName name={username} />
          </div>

          <IconButton
            icon={<ArrowIcon />}
            inverted={isOpenMenu}
            onClick={toggleMenu}
          />
        </div>
        {isOpenMenu
          ? ReactDOM.createPortal(<DropdownMenu onModal={setType} />, modalRoot)
          : null}
        {visibleModal
          ? ReactDOM.createPortal(
              <Modal
                onClose={closeModal}
                onVisible={exetedModal}
                isOpen={isOpenModal}
                type={typeModal}
              />,
              modalRoot
            )
          : null}
      </>
    );
  }
);

Account.displayName = 'Account';

export default Account;
