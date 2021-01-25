import React from 'react';

import TodayIcon from '../../assets/images/icons/today.svg';
import InboxIcon from '../../assets/images/icons/all_inbox.svg';
import StarIcon from '../../assets/images/icons/star.svg';
import CompletedIcon from '../../assets/images/icons/completed.svg';
import DeleteIcon from '../../assets/images/icons/delete.svg';

import CategoryItem from './CategoryItem';

import classes from './CategoriesList.scss';

type CategoriesType = {
  id: string;
  name: string;
  icon: JSX.Element;
};

const categories: CategoriesType[] = [
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

const CategoriesList = (): JSX.Element => (
  <nav className={classes.CategoryList}>
    <ul>
      {categories.map((item) => {
        const { id, icon, name } = item;

        return <CategoryItem key={id} icon={icon} name={name} />;
      })}
    </ul>
  </nav>
);

export default CategoriesList;
