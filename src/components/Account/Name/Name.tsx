import React from 'react';

import classes from './Name.scss';

type NamePropsType = {
  name: string;
};

const Name = ({ name }: NamePropsType): JSX.Element => (
  <span className={classes.Name}>{name}</span>
);

export default Name;
