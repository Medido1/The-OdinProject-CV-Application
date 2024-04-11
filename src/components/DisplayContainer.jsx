import React from "react";
import PersonalDisplay from "./PersonalDisplay";
import '../styles/displayContainer.css';

export default function DisplayContainer ({personalDetails}) {
  return (
    <div className="display_container">
      <PersonalDisplay personalDetails={personalDetails}/>
    </div>
  )
}