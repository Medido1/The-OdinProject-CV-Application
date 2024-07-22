import React from 'react';
import PersonalInput from './PersonalInput';

export default function InputContainer({personalDetails, onPersonalDetailsChange}) {
  return (
    <div className="input_container">
      <PersonalInput personalDetails={personalDetails} 
      onPersonalDetailsChange={onPersonalDetailsChange}/>
    </div>
    
  )
}