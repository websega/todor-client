import React from 'react';

import TodayIcon from '../../assets/images/icons/today.svg';
import InboxIcon from '../../assets/images/icons/all_inbox.svg';
import StarIcon from '../../assets/images/icons/star.svg';
import CompletedIcon from '../../assets/images/icons/completed.svg';
import DeleteIcon from '../../assets/images/icons/delete.svg';

import ToggleSidebar from '../ToggleNav';
import FoldersList from '../FoldersList';
import AddButton from '../AddButton';
import CategoriesList from '../CategoriesList';

import classes from './Sidebar.scss';

const categories = [
  {
    id: 'today',
    name: 'Сегодня',
    icon: <TodayIcon />,
  },
  {
    id: 'inbox',
    name: 'Предстоящие',
    icon: <InboxIcon />,
  },
  {
    id: 'important',
    name: 'Важное',
    icon: <StarIcon />,
  },
  {
    id: 'completed',
    name: 'Выполненные',
    icon: <CompletedIcon />,
  },
  {
    id: 'deleted',
    name: 'Удалённые',
    icon: <DeleteIcon />,
  },
];

const Sidebar = (): JSX.Element => (
  <aside className={classes.Sidebar}>
    <ToggleSidebar />
    <CategoriesList categories={categories} />
    <FoldersList />
    <AddButton modalType="folder" label="Добавить папку" />
    <AddButton modalType="task" label="Добавить задачу" />
  </aside>
);

export default Sidebar;
