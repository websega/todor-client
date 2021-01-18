import React from 'react';

import MainText from '../../MainText';
import Count from '../../Count';
import Icon from '../../Icon';

import classes from './CategoryItem.scss';

const CategoryItem = ({
  color,
  icon,
  count,
  name,
  selected,
  onCategorySelected,
}): JSX.Element => {
  const cls = [classes.item];

  if (selected) {
    cls.push(classes.active);
  }

  return (
    <li className={cls.join(' ')}>
      <div
        role="button"
        tabIndex="0"
        className={classes.btn}
        onClick={onCategorySelected}
        onKeyDown={onCategorySelected}
      >
        <div className={classes.left}>
          <Icon icon={icon} type="category" />
          <MainText name={name} />
        </div>
        <Count count={count} color={color} />
      </div>
    </li>
  );
};

export default CategoryItem;
