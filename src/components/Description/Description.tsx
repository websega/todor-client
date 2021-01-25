import React from 'react';

import DescriptionHeader from '../DescriptionHeader';
import DescriptionPlug from '../DescriptionPlug';
import DescriptionTextArea from '../DescriptionTextArea';

import classes from './Description.scss';

const selectedTask = false;

const Description = (): JSX.Element => (
  <section className={classes.description}>
    {selectedTask ? (
      <>
        <DescriptionHeader />
        <DescriptionTextArea />
      </>
    ) : (
      <DescriptionPlug />
    )}
  </section>
);

export default Description;
