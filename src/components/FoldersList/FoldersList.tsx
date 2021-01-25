import React from 'react';

import FolderItem from './FolderItem';

import classes from './FoldersList.scss';

const FoldersList = ({ folders = [] }) => (
    <nav className={classes.folder}>
      {folders.map((folder) => {
        const { id, color, count, name, selected } = folder;

        return (
          <FolderItem
            key={id}
            color={color}
            count={count}
            name={name}
            selected={selected}
          />
        );
      })}
    </nav>
  );

export default FoldersList;
