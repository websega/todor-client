const APP_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/'
    : 'https://todor-todo.herokuapp.com/';

export default APP_URL;
