import React, { useEffect, useState } from 'react';

import { Transition } from 'react-transition-group';
import classNames from 'classnames';

import Warnicon from '../../assets/images/icons/warning.svg';

import classes from './FormErrorMessage.scss';

const DURATION = 690;

type ErrorTextPropsType = {
  msg: string | undefined;
  isIn: boolean;
};

const FormErrorMessage = React.memo(
  ({ msg, isIn }: ErrorTextPropsType): JSX.Element => {
    const [errorMsg, setErrorMsg] = useState<string | undefined>('');

    /**
     * Add a check to useEffect to make
     * the animation end when isIn changes to false
     */

    useEffect(() => {
      if (isIn) {
        setErrorMsg(msg);
      }
    }, [errorMsg, isIn, msg]);

    return (
      <Transition
        in={isIn}
        appear
        timeout={DURATION}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div
            className={classNames(classes.Warning, classes[`error-${state}`])}
          >
            <Warnicon />
            <span>{errorMsg}</span>
          </div>
        )}
      </Transition>
    );
  }
);

FormErrorMessage.displayName = 'FormErrorMessage';

export default FormErrorMessage;
