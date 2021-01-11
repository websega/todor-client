import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { closeModal } from '../../redux/actions/modal';
import { registration, login } from '../../redux/actions/async';

import InputModal from '../InputModal';
import ButtonModal from '../ButtonModal';

import classes from './Form.scss';

type FormProps = { type: string };

const Form = ({ type }: FormProps): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    switch (type) {
      case 'registration':
        registration(name, email, password);
        dispatch(closeModal());
        break;
      case 'login':
        dispatch(login(email, password));
        dispatch(closeModal());
        break;

      default:
        break;
    }
  };

  const getButtonName = (): string =>
    type === 'registration' ? 'Зарегистрироваться' : 'Войти';

  return (
    <form className={classes.Form} onSubmit={submit}>
      {type === 'registration' && (
        <InputModal value={name} setValue={setName} placeholder="Имя" />
      )}

      <InputModal
        value={email}
        setValue={setEmail}
        placeholder="Электронная почта"
      />
      <InputModal
        value={password}
        setValue={setPassword}
        placeholder="Пароль"
      />

      <ButtonModal name={getButtonName()} />
    </form>
  );
};

export default Form;
