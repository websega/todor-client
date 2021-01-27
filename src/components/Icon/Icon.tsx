import React from 'react';

import classNames from 'classnames';

import classes from './Icon.scss';

type IconProps = {
  icon: JSX.Element;
  type?: string;
  important?: boolean;
};

const Icon = ({
  icon,
  type = 'default',
  important,
}: IconProps): JSX.Element => {
  const cls = classNames({
    [classes.Icon]: true,
    [classes.SortIcon]: type === 'sort',
    [classes.DotsIcon]: type === 'dots',
    [classes.Close]: type === 'close',
    [classes.SignIcon]: type === 'sign',
    [classes.RegIcon]: type === 'reg',
    [classes.MainIcon]:
      type === 'category' || type === 'important' || type === 'default',
    'mr-r-21': type === 'sign' || type === 'reg' || type === 'category',
    [classes.Important]: important,
  });

  return <div className={cls}>{icon}</div>;
};

export default Icon;
