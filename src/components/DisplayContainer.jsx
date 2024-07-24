import React from 'react';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import InfoDisplay from './InfoDisplay';

export default function displayContainer({personalDetails, educationDetails, 
  educationList, experienceDetails, experienceList}) {
  return (
    <div className='display_container'>
      <PersonalInfoDisplay personalDetails={personalDetails}/>
      <InfoDisplay 
        info={educationDetails}
        infoList={educationList}
        infoType = "Education"
      />
      <InfoDisplay
        info={experienceDetails}
        infoList={experienceList}
        infoType = "Experience"
      />
    </div>
  )
}