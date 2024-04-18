import React from "react";
import PersonalDisplay from "./PersonalDisplay";
import EducationDisplay from "./EducationDisplay";
import '../styles/displayContainer.css';


export default function DisplayContainer (
  {
  personalDetails,
  educationDetails
  }) 
  {
  return (
    <div className="display_container">
      <PersonalDisplay personalDetails={personalDetails}/>
      <EducationDisplay educationDetails={educationDetails}/>
    </div>
  )
}