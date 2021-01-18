import React from 'react';

import classes from './DescriptionTextArea.scss';

const DescriptionTextArea = (): JSX.Element=> (
  <textarea
    className={classes.textInput}
    placeholder="Напишите описание к задаче..."
  />
);

export default DescriptionTextArea;
