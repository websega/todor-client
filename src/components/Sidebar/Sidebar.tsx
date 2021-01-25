import React from 'react';

import ToggleSidebar from '../ToggleNav';
import FoldersList from '../FoldersList';
import AddButton from '../AddButton';
import CategoriesList from '../CategoriesList';

import classes from './Sidebar.scss';

const Sidebar = (): JSX.Element => (
  <aside className={classes.Sidebar}>
    <ToggleSidebar />
    <CategoriesList />
    <FoldersList />
    <AddButton modalType="folder" label="Добавить папку" />
    <AddButton modalType="task" label="Добавить задачу" />
  </aside>
);

export default Sidebar;
