import React from 'react';

import classes from './Icon.scss';

type IconProps = {
  icon: JSX.Element;
  type?: string;
};

const Icon = ({ icon, type = 'default' }: IconProps): JSX.Element => {
  const cls = [classes.Icon];

  switch (type) {
    case 'sort':
      cls.push(classes.SortIcon);
      break;
    case 'dots':
      cls.push(classes.DotsIcon);
      break;
    case 'close':
      cls.push(classes.Close);
      break;
    case 'sign':
      cls.push('mr-r-21');
      cls.push(classes.SignIcon);
      break;
    case 'reg':
      cls.push('mr-r-21');
      cls.push(classes.RegIcon);
      break;
    case 'important':
      cls.push(classes.Important);
      cls.push(classes.MainIcon);
      break;
    case 'category':
      cls.push('mr-r-21');
      cls.push(classes.MainIcon);
      break;
    default:
      cls.push(classes.MainIcon);
      break;
  }

  return <div className={cls.join(' ')}>{icon}</div>;
};

export default Icon;
