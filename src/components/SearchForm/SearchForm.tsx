import React from 'react';

import SearchIcon from '../../assets/images/icons/search.svg';

import classes from './SearchForm.scss';

const SearchForm = (): JSX.Element => (
  <label htmlFor="inp-serch" className={classes.Input}>
    <SearchIcon className={classes.Icon} />
    <input id="inp-serch" type="text" placeholder="Найти ..." />
  </label>
);

export default SearchForm;
