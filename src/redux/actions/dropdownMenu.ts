type ActionDropdownMenu = { type: string; payload?: string };

// eslint-disable-next-line import/prefer-default-export
export const toggleMenu = (): ActionDropdownMenu => ({ type: 'TOGGLE_MENU' });
