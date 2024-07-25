import React from 'react';
import PersonalInfoDisplay from './PersonalInfoDisplay';
import InfoDisplay from './InfoDisplay';

export default function displayContainer({personalDetails, educationDetails, 
  educationList, experienceDetails, experienceList, isTyping,
  color}) {
  return (
    <div className='display_container'>
      <PersonalInfoDisplay personalDetails={personalDetails} color={color}/>
      <div className="right_side_display">
        <InfoDisplay 
          info={educationDetails}
          infoList={educationList}
          infoType = "Education"
          isTyping={isTyping}
        />
        <InfoDisplay
          info={experienceDetails}
          infoList={experienceList}
          infoType = "Experience"
          isTyping={isTyping}
        />
      </div>
    </div>
  )
}