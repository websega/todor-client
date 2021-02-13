import React from 'react';

import Form from '../Form';

import classes from './Login.scss';

const Login = (): JSX.Element => (
  <div className={classes.Wrapper}>
    <h2 className={classes.Title}>Войти в аккаунт</h2>
    <div className={classes.FormWrapper}>
      <Form formType="login" />
    </div>
  </div>
);

export default Login;
