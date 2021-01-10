import React, { useState } from 'react';

import { useDispatch } from 'react-redux';

import InputModal from '../InputModal';
import ButtonModal from '../ButtonModal';

import classes from './Form.scss';
import { registration, login } from '../../redux/actions/async';

type FormProps = { type: string; onClose: () => void };

const Form = ({ type, onClose }: FormProps): JSX.Element => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line sonarjs/no-all-duplicated-branches
    switch (type) {
      case 'registration':
        registration(name, email, password);
        onClose();
        break;
      case 'login':
        dispatch(login(email, password));
        onClose();
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
