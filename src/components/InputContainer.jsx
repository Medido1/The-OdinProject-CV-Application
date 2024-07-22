import React from 'react';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';

export default function InputContainer({personalDetails, onPersonalDetailsChange}) {
  return (
    <div className="input_container">
      <PersonalInput personalDetails={personalDetails} 
      onPersonalDetailsChange={onPersonalDetailsChange}/>
      <EducationInput />
    </div>
    
  )
}