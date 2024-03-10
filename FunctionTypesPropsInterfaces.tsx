import React from 'react';

interface ColorPickerProps {
  colors: string[];
  handleColorSelect: (color: string) => void;
}

function ColorPicker({ colors, handleColorSelect }: ColorPickerProps) {
  const renderedColors = colors.map((color) => {
    return (
      <button key={color} onClick={() => handleColorSelect(color)}>
        {color}
      </button>
    );
  });

  return <div>{renderedColors}</div>;
}

// we're passing function directly into this prop, and TypeScript
// knows what to expect for that prop
<ColorPicker
  colors={['red', 'green', 'blue']}
  handleColorSelect={(color) => console.log(color)}
/>;

// Therefore we need to use function types inside of Interfaces
// We're gonna end up doing this all the time inside of our React Components
// that ever need to use a Callback function in any way
