import React from 'react';

import classes from './ButtonModal.scss';

type ButtonModalProps = {
  name: string;
  disabled: boolean;
};

const ButtonModal = React.memo(
  ({ name, disabled }: ButtonModalProps): JSX.Element => (
    <button className={classes.Button} type="submit" disabled={disabled}>
      {name}
    </button>
  )
);

ButtonModal.displayName = 'ButtonModal';

export default ButtonModal;
