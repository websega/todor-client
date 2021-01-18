import React from 'react';

import ColorItem from './ColorItem/index';

import classes from './ColorPanel.scss';

type ColorsType = {
  id: string;
  name: string;
  hex: string;
};

const createColor = (name: string, hex: string) => ({
  id: name,
  name,
  hex,
});

const colors: ColorsType[] = [
  createColor('teal', '#64d2ff'),
  createColor('red', '#ff453a'),
  createColor('yellow', '#ffd60a'),
  createColor('green', '#32d74b'),
  createColor('indigo', '#5e5ce6'),
  createColor('purple', '#bf5af2'),
  createColor('pink', '#ff375f'),
  createColor('orange', '#ff9f0a'),
  createColor('default', '#505f79'),
];

const ColorPicker = (): JSX.Element => (
  <div className={classes.colors}>
    {colors.map((color) => {
      const { id, name } = color;

      return <ColorItem key={id} name={name} />;
    })}
  </div>
);

export default ColorPicker;
