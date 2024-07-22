import React from 'react';
import educationIcon from '../assets/icons/mortarboard.png'

export default function EducationInput() {
  return (
    <form action="" className='education_form'>
      <h2>
        <img src={educationIcon} className='icon'/>
        Education
      </h2>
    </form>
  )
}