import React from 'react';

import EmptyIcons from '../../../assets/images/icons/click-empty.svg';

import classes from './DescriptionPlug.scss';

const DescriptionPlug = (): JSX.Element => (
  <div className={classes.PlugWrapper}>
    <EmptyIcons />

    <span className={classes.EmptyText}>
      Click a task title to view its detail
    </span>
  </div>
);

export default DescriptionPlug;
