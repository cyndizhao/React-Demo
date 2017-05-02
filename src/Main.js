// Whenever you write jsx in your file, you must
// import the react package, because jsx is converted
// to React.createElement function calls
import React from 'react';
import HelloWorld from './HelloWorld';
// the import that is without braces will get
// the value that is on the right-hand side of `export default`
import Square, { BlueSquare } from './Square';
import OrangeRectangle from './OrangeRectangle';
import Shape from './Shape';
import Greetings from './Greetings';
import ShadesOfGrey from './ShadesOfGrey';


function Main (props) {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  return (
    <div style={style} className="main">
      <HelloWorld name="Jon Snow" />
      <HelloWorld name="Daenerys Targaryan" />
      <HelloWorld name="Cersei Lannister" />
      <OrangeRectangle />
      <BlueSquare />
      <Square color="LimeGreen" />
      <Square color="Fuchsia" />
      <Square color="Brown" />
      <Shape color="Red" type="Circle" />
      <Shape color="Blue" type="Square" />
      <Greetings names = {['Cyndi', 'Chase', 'Nic', 'Josh']} />
      <ShadesOfGrey />
    </div>
  );
}

export default Main;
