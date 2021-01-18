import React from 'react';

import classes from './AddButton.scss';

const AddButton = ({ label, type }): JSX.Element => {
  const cls = [classes.btn];

  if (type === 'taskModal') {
    cls.push(classes.quickAddTaskBtn);
  } else if (type === 'folderModal') {
    cls.push(classes.tagAddBtn);
  }

  return (
    <button
      className={cls.join(' ')}
      type="button"
      onClick={() => onClick(type)}
    >
      {label}
    </button>
  );
};

export default AddButton;
