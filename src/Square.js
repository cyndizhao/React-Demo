import React from 'react';
import Shape from './Shape';

export function Square (props) {
  const { color = 'Blue' } = props;

  return <Shape {...props} color={color} />
}

export function BlueSquare (props) {
  // using {...props} inside a JSX element will
  // pass all the properties of props as props of that
  // element
  return <Square color="blue" {...props} />
}


export default Square;
