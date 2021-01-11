type ActionModalType = { type: string; payload?: string };

export const openModal = (modalType: string): ActionModalType => ({
  type: 'OPEN_MODAL',
  payload: modalType,
});

export const closeModal = (): ActionModalType => ({
  type: 'CLOSE_MODAL',
});

export const setDefaultType = (): ActionModalType => ({
  type: 'SET_TYPE',
});
