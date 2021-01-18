import React from 'react';

import classes from './MainText.scss';

const MainText = ({ name }): JSX.Element => (
  <span className={['crop-text', classes.text].join(' ')}>{name}</span>
);

export default MainText;
