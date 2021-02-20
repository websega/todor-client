import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAvatar, uploadAvatar } from '../../redux/actions/async';

import classes from './Profile.scss';

const Profile = (): JSX.Element => {
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }

    const file = e.target.files[0];

    dispatch(uploadAvatar(file));
  };

  return (
    <div>
      <label htmlFor="file">
        <input
          id="file"
          type="file"
          placeholder="Загрузить аватар"
          onChange={changeHandler}
        />
      </label>
      <button type="button" onClick={() => dispatch(deleteAvatar())}>
        Удалить аватар
      </button>
      <Link to="/">Закрыть</Link>
    </div>
  );
};

export default Profile;
