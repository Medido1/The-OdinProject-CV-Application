import React, { useState } from 'react';

export default function CustomiseContainer() {
  return (
    <div className='customize_container'>
      <div className='layout_container'>
        <h2>Layout</h2>
        <ul>
          <li>
            <div className='square top'></div>
            <p>Top</p>
          </li>
          <li>
            <div className='square left'></div>
            <p>Left</p>
          </li>
          <li>
            <div className='square right'></div>
            <p>Right</p>
          </li>
        </ul>
      </div>
    </div>
  )
}