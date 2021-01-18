import React from 'react';

import MainText from '../../MainText';
import Count from '../../Count';

import classes from './FolderItem.scss';

const FolderItem = ({ color, count, name, selected, }) => {
  const cls = [classes.item, classes.btn];

  if (selected) {
    cls.push(classes.active);
  }

  return (
    <button
      className={cls.join(' ')}
      type="button"
      tabIndex={0}
    >
      <span className={classes.left}>
        <span className={[classes.badge, `bgColor-${color}`].join(' ')} />
        <MainText name={name} />
      </span>
      <Count count={count} color={color} />
    </button>
  );
};

export default FolderItem;
