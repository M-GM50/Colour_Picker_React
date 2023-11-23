import React, { useState } from 'react';

const ColorChanger = () => {
  const [] = useState();

  const changeColor = () => {
    let buttonClick = prompt("Pick a color");
    document.getElementById("square").style.backgroundColor = buttonClick; //Function. Create a prompt. The colout the user enters defines the background colour.
   
  };

  return (
 
    // JSX goes here

    <>
      
    <div id = "square"></div>
    <button onClick = {changeColor}>Click me</button> //Creates empty div. Created square using CSS

    </>

      
  );
};

export default ColorChanger;
