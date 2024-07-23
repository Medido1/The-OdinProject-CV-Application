import React from 'react';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import EducationDisplay from './EducationDisplay';

export default function displayContainer({personalDetails, educationDetails, 
  educationList}) {
  return (
    <div className='display_container'>
      <PersonalInfoDisplay personalDetails={personalDetails}/>
      <EducationDisplay 
      educationDetails={educationDetails}
      educationList={educationList}
      />
    </div>
  )
}