const createDate = (): string => {
  const today = new Date();
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
  };

  return today.toLocaleDateString('ru-RU', options);
};

export default createDate;
