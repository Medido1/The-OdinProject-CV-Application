import React from 'react';
import PersonalInfoDisplay from './PersonalInfoDisplay';

export default function displayContainer({personalDetails}) {
  return (
    <div className='display_container'>
      <PersonalInfoDisplay personalDetails={personalDetails}/>
    </div>
  )
}