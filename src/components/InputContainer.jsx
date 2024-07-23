import React from 'react';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';

export default function InputContainer(
  {personalDetails, onPersonalDetailsChange,
    educationDetails, onEducationDetailsChange,
    educationList, updateEducationList,
  }) {
  return (
    <div className="input_container">
      <PersonalInput personalDetails={personalDetails} 
      onPersonalDetailsChange={onPersonalDetailsChange}/>
      <EducationInput educationDetails={educationDetails}
      onEducationDetailsChange={onEducationDetailsChange}
      educationList={educationList}
      updateEducationList={updateEducationList}
      />
    </div>
    
  )
}