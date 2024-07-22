import React from 'react';
import '../styles/InputGrp.css';

export default function InputGrp({id, labeltext, type, placeholder}) {
  return (
    <div className='input_grp'>
      <label htmlFor={id}>{labeltext}</label>
      <input type={type} id={id}
      placeholder={placeholder} />
    </div>
  )
}