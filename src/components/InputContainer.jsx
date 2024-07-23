import React from 'react';
import PersonalInput from './PersonalInput';
import InfoInput from './InfoInput';

export default function InputContainer(
  {personalDetails, onPersonalDetailsChange,
    educationDetails, onEducationDetailsChange,
    educationList, updateEducationList,
    experienceDetails, onExperienceDetailsChange,
    experienceList, updateExperienceList
  }) {
  return (
    <div className="input_container">
      <PersonalInput personalDetails={personalDetails} 
      onPersonalDetailsChange={onPersonalDetailsChange}/>
      <InfoInput 
      info={educationDetails}
      oninfoChange={onEducationDetailsChange}
      infoList={educationList}
      updateinfoList={updateEducationList}
      infoType="Education"
      />
      <InfoInput 
      info={experienceDetails}
      oninfoChange={onExperienceDetailsChange}
      infoList={experienceList}
      updateinfoList={updateExperienceList}
      infoType="Experience"
      />
    </div>
    
  )
}