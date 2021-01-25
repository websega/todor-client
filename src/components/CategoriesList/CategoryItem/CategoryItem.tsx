import React from 'react';

import MainText from '../../MainText';
import Count from '../../Count';
import Icon from '../../Icon';

import classes from './CategoryItem.scss';

type CategoryItemPropsType = {
  name: string;
  icon: JSX.Element;
};

const CategoryItem = ({ icon, name }: CategoryItemPropsType): JSX.Element => (
  <li className={classes.Item}>
    <div role="button" tabIndex={0} className={classes.Btn}>
      <div className={classes.Left}>
        <Icon icon={icon} type="category" />
        <MainText name={name} />
      </div>

      <Count numberOfTask={10} color="default" />
    </div>
  </li>
);

export default CategoryItem;
