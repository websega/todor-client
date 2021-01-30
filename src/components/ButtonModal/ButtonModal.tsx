import React from 'react';

import classes from './ButtonModal.scss';

type ButtonModalPropsType = {
  name: string;
  disabled: boolean;
};

const ButtonModal = React.memo(
  ({ name, disabled }: ButtonModalPropsType): JSX.Element => (
    <button className={classes.Button} type="submit" disabled={disabled}>
      {name}
    </button>
  )
);

ButtonModal.displayName = 'ButtonModal';

export default ButtonModal;
