import React from 'react';

import classNames from 'classnames';

import Count from '../../Count';
import Icon from '../../Icon';

import classes from './CategoryItem.scss';

type CategoryItemPropsType = {
  name: string;
  icon: JSX.Element;
  active: boolean;
  onClick: () => void;
};

const CategoryItem = ({
  icon,
  name,
  active,
  onClick,
}: CategoryItemPropsType): JSX.Element => (
  <li
    className={classNames(classes.Item, { [classes.Active]: active })}
    onClick={onClick}
    aria-hidden="true"
  >
    <div role="button" tabIndex={0} className={classes.Btn}>
      <div className={classes.Left}>
        <Icon icon={icon} type="category" />
        <span>{name}</span>
      </div>

      <Count numberOfTask={10} color="default" />
    </div>
  </li>
);

export default CategoryItem;
