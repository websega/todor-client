import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import TodayIcon from '../../assets/images/icons/today.svg';
import InboxIcon from '../../assets/images/icons/all_inbox.svg';
import StarIcon from '../../assets/images/icons/star.svg';
import CompletedIcon from '../../assets/images/icons/completed.svg';
import DeleteIcon from '../../assets/images/icons/delete.svg';

import CategoryItem from './CategoryItem';

import classes from './CategoriesList.scss';
import { setCurrentCategory } from '../../redux/actions/system/system';

type CategoriesType = {
  id: string;
  name: string;
  icon: JSX.Element;
};

const categories: CategoriesType[] = [
  {
    id: 'all',
    name: 'Все',
    icon: <InboxIcon />,
  },
  {
    id: 'today',
    name: 'Сегодня',
    icon: <TodayIcon />,
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

const CategoriesList = (): JSX.Element => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const categoryId = location.pathname.split('/')[2];

    if (categoryId) {
      dispatch(setCurrentCategory(categoryId));
    }
  }, [dispatch, location.pathname]);

  return (
    <nav className={classes.CategoryList}>
      <ul>
        {categories.map((item) => {
          const { id, icon, name } = item;

          return <CategoryItem key={id} id={id} icon={icon} name={name} />;
        })}
      </ul>
    </nav>
  );
};
export default CategoriesList;
