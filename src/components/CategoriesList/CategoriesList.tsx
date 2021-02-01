import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { InitialSystemStateType } from '../../redux/reducers/systemReducer';

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

type StateType = { system: InitialSystemStateType };

const CategoriesList = (): JSX.Element => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const currentCategory = useSelector(
    (state: StateType) => state.system.currentCategory
  );

  const itemClickHandler = (id: string) => {
    history.push(`${id}`);
  };

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

          return (
            <CategoryItem
              key={id}
              icon={icon}
              name={name}
              active={currentCategory === id}
              onClick={() => itemClickHandler(id)}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default CategoriesList;
