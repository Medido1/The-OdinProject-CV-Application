import React from 'react';

export default function CustomiseContainer({color, handleColorChange}) {
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