import React from 'react';

import ColorItem from './ColorItem';

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

type ColorPickerPropsType = {
  onColorItem: (id: string) => void;
  activeColorId: string;
};

const ColorPicker = ({
  onColorItem,
  activeColorId,
}: ColorPickerPropsType): JSX.Element => (
  <div className={classes.Сolors}>
    {colors.map((color) => {
      const { id, name } = color;

      return (
        <ColorItem
          key={id}
          name={name}
          isActive={activeColorId === id}
          onClick={() => onColorItem(id)}
        />
      );
    })}
  </div>
);

export default ColorPicker;
