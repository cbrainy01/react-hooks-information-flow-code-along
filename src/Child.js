import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({onChangeColor, color}) {
  console.log("TEST: ", onChangeColor);
  function handleClick() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
    //onChangeColor
  }
  return <div onClick={handleClick} className="child" style={{ backgroundColor: color }} />;
}

export default Child;
//"#FFF"