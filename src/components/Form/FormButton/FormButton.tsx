import React from 'react';

import classes from './FormButton.scss';

type FormButtonPropsType = {
  name: string;
  disabled: boolean;
};

const FormButton = React.memo(
  ({ name, disabled }: FormButtonPropsType): JSX.Element => (
    <button className={classes.Button} type="submit" disabled={disabled}>
      {name}
    </button>
  )
);

FormButton.displayName = 'FormButton';

export default FormButton;
