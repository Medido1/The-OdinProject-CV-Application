import React, { useEffect } from "react";
import PersonalInput from "./PersonalInput";
import EducationInput from "./EducationInput";

export default function InputContainer({
  personalDetails,
  onPersonalDetailsChange,
  educationDetails,
  onEducationDetailsChange,
  educationList,
  setEducationList
  }) {
  
  return (
    <div className="input_container">
      <PersonalInput 
        personalDetails={personalDetails} 
        onPersonalDetailsChange={onPersonalDetailsChange}/>
      <EducationInput 
        educationDetails={educationDetails}
        onEducationDetailsChange={onEducationDetailsChange}
        educationList={educationList}
        setEducationList={setEducationList}
      />
    </div>
    
  )
}