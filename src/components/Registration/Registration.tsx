import React from 'react';
import Form from '../Form';

import classes from './Registration.scss';

const Registration = (): JSX.Element => (
  <div className={classes.Wrapper}>
    <h2 className={classes.Title}>Создать аккаунт</h2>
    <div className={classes.FormWrapper}>
      <Form formType="registration" />
    </div>
  </div>
);

export default Registration;
