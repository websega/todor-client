export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const SET_DEFAULT_MODAL_TYPE = 'SET_DEFAULT_MODAL_TYPE';

export const SET_CURRENT_TASK = 'SET_CURRENT_TASK';
export const SET_CURRENT_COLOR = 'SET_CURRENT_COLOR';
export const SET_CURRENT_CATEGORY = 'SET_CURRENT_CATEGORY';

export const SET_POSITION_CONTEXT_MENU = 'SET_POSITION_CONTEXT_MENU';

export const TOGGLE_SIDE_BAR = 'TOGGLE_SIDE_BAR';

export const CLEAR = 'CLEAR';

export type PositionType = { x: number; y: number };

type ActionOpenModalType = { type: typeof OPEN_MODAL; payload: string };
type ActionCloseModalType = { type: typeof CLOSE_MODAL };
type ActionSetDefaultType = { type: typeof SET_DEFAULT_MODAL_TYPE };

type ActionToggleSidebarType = { type: typeof TOGGLE_SIDE_BAR };

type ActionSetContextMenuType = {
  type: typeof SET_POSITION_CONTEXT_MENU;
  payload: PositionType;
};

type ActionClearType = { type: typeof CLEAR };

type ActionCurrentTaskType = {
  type: typeof SET_CURRENT_TASK;
  payload: string;
};

type ActionCurrentColorType = {
  type: typeof SET_CURRENT_COLOR;
  payload: string;
};

type ActionCurrentCategoryType = {
  type: typeof SET_CURRENT_CATEGORY;
  payload: string;
};

export type ActionSystemTypes =
  | ActionOpenModalType
  | ActionCloseModalType
  | ActionSetDefaultType
  | ActionCurrentTaskType
  | ActionCurrentColorType
  | ActionCurrentCategoryType
  | ActionClearType
  | ActionSetContextMenuType
  | ActionToggleSidebarType;
