import React from 'react';

import classes from './ButtonModal.scss';

type ButtonModalProps = { name: string };

const ButtonModal = React.memo(
  ({ name }: ButtonModalProps): JSX.Element => (
    <button className={classes.Button} type="submit">
      {name}
    </button>
  )
);

ButtonModal.displayName = 'ButtonModal';

export default ButtonModal;
