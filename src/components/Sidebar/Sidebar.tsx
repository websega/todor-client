import React from 'react';

import FoldersList from '../FoldersList';
import AddButton from '../AddButton';
import CategoriesList from '../CategoriesList';

import classes from './Sidebar.scss';
import NavHeader from '../NavHeader';

const Sidebar = React.memo(
  (): JSX.Element => (
    <aside className={classes.Sidebar}>
      <NavHeader />
      <CategoriesList />
      <FoldersList />
      <AddButton modalType="folder" label="Добавить папку" />
      <AddButton modalType="task" label="Добавить задачу" />
    </aside>
  )
);

Sidebar.displayName = 'Sidebar';

export default Sidebar;
