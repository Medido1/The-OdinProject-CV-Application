import React from 'react';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';

export default function InputContainer(
  {personalDetails, onPersonalDetailsChange,
    educationDetails, onEducationDetailsChange
  }) {
  return (
    <div className="input_container">
      <PersonalInput personalDetails={personalDetails} 
      onPersonalDetailsChange={onPersonalDetailsChange}/>
      <EducationInput educationDetails={educationDetails}
      onEducationDetailsChange={onEducationDetailsChange}/>
    </div>
    
  )
}