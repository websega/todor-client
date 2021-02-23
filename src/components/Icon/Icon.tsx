import React from 'react';

import classNames from 'classnames';

import classes from './Icon.scss';

type IconPropsType = {
  icon: JSX.Element;
  type?: string;
  important?: boolean;
};

const Icon = React.memo(
  ({ icon, type = 'default', important }: IconPropsType): JSX.Element => {
    const cls = classNames('mr-r-21', classes.Icon, {
      [classes.CleanIcon]: type === 'clean',
      [classes.Close]: type === 'close',
      [classes.SignIcon]: type === 'sign',
      [classes.RegIcon]: type === 'reg',
      [classes.DelIcon]: type === 'del',
      [classes.MainIcon]:
        type === 'category' ||
        type === 'important' ||
        type === 'default' ||
        type === 'del',
      [classes.Important]: important,
    });

    return <div className={cls}>{icon}</div>;
  }
);

Icon.displayName = 'Icon';

export default Icon;
