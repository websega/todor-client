import React from 'react';

import DescriptionHeader from '../DescriptionHeader';
import DescriptionTextArea from '../DescriptionTextArea';

import classes from './Description.scss';

const Description = ({
  selectedTask,
  onTaskChecked,
  onTaskImportant,
  onOpenContextMenu,
}) => (
    <section className={classes.description}>
      {selectedTask && (
        <DescriptionHeader
          selectedTask={selectedTask}
          onTaskChecked={onTaskChecked}
          onTaskImportant={onTaskImportant}
          onOpenContextMenu={onOpenContextMenu}
        />
      )}

      <DescriptionTextArea />
    </section>
  );

export default Description;
