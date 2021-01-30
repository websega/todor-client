export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_DEFAULT_MODAL_TYPE = 'SET_DEFAULT_MODAL_TYPE';

export const SET_CURRENT_TASK = 'SET_CURRENT_TASK';
export const SET_CURRENT_COLOR = 'SET_CURRENT_COLOR';

export const TOGGLE_MENU = 'TOGGLE_MENU';

type ActionOpenModalType = { type: typeof OPEN_MODAL; payload: string };
type ActionCloseModalType = { type: typeof CLOSE_MODAL };
type ActionSetDefaultType = { type: typeof SET_DEFAULT_MODAL_TYPE };

type ActionDropdownMenuType = { type: typeof TOGGLE_MENU };

type ActionCurrentTaskType = {
  type: typeof SET_CURRENT_TASK;
  payload: string;
};

type ActionCurrentColorType = {
  type: typeof SET_CURRENT_COLOR;
  payload: string;
};

export type ActionSystemTypes =
  | ActionOpenModalType
  | ActionCloseModalType
  | ActionSetDefaultType
  | ActionDropdownMenuType
  | ActionCurrentTaskType
  | ActionCurrentColorType;
