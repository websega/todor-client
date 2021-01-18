import React from 'react';

import CategoryItem from './CategoryItem';

import classes from './CategoriesList.scss';

const CategoriesList = ({ categories }): JSX.Element => (
  <nav className={classes.category}>
    <ul>
      {categories.map((item) => {
        const { id, color, icon, count, name, selected } = item;

        return (
          <CategoryItem
            key={id}
            color={color}
            icon={icon}
            count={count}
            name={name}
            selected={selected}
            onCategorySelected={() => console.log('categories list')}
          />
        );
      })}
    </ul>
  </nav>
);

export default CategoriesList;
