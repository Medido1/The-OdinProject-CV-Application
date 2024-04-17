import React from "react";
import educationIcon from '../assets/mortarboard.png';
import arrowDown from '../assets/arrowDown.png';
import arrowUp from '../assets/arrowUp.png';
import '../styles/educationInput.css';

export default function EducationInput() {
  return (
    <div className="form_container">
      <form className="education_form">
        <div className="form_header">
          <div>
            <img src={educationIcon} alt="education icon" className="icon big"/>
            <h2>Education</h2>
          </div>
          <img src={arrowDown} alt="open menu img" className="icon" />
        </div>
      </form>
    </div>
  )
}