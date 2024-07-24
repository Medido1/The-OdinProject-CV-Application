import React, { useState } from 'react';

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result 
  ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
  }
  :null
}

function updateProperty  (key, val) {
  document.body.style.setProperty(key, val);
}

export default function CustomiseContainer({}) {
  const [color, setColor] = useState("#f1f5f9");

  function handleColorChange(e) {
    setColor(e.target.value);
    const {r, g, b} = hexToRgb(color)
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const isBrighter = brightness > 127.5;
    const fontColor = isBrighter ? "black" : "white"

    updateProperty("--resume-bg-color", color)
    updateProperty("--personal-info-color", fontColor)
  } 
  return (
    <div className='customize_container'>
      <div className='layout_container'>
        <h2>Layout</h2>
        <ul>
          <li>
            <div className='square top' style={{backgroundColor: color}}></div>
            <p>Top</p>
          </li>
          <li>
            <div className='square left' style={{backgroundColor: color}}></div>
            <p>Left</p>
          </li>
          <li>
            <div className='square right' style={{backgroundColor: color}}></div>
            <p>Right</p>
          </li>
        </ul>
      </div>
      <div className="color_picker">
        <h2>Color</h2>
        <div>
          <label htmlFor="color">choose color</label>
          <input type="color"  id="color" onChange={handleColorChange}/>
        </div>
      </div>
    </div>
  )
}