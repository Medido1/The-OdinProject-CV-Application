import React, { useState } from "react";
import educationIcon from '../assets/mortarboard.png';
import arrowDown from '../assets/arrowDown.png';
import arrowUp from '../assets/arrowUp.png';
import '../styles/educationInput.css';
import InputGrp from "./InputGrp";

export default function EducationInput({
  educationDetails,
  onEducationDetailsChange}) {
  const [isShowForm, setIsShowForm] = useState(false);
  const [addBtn, setAddBtn] = useState(false);

  function showAddBtn() {
    setAddBtn(!addBtn);
  }

  function showForm() {
    setIsShowForm(!isShowForm);
    showAddBtn();
  }
 
  function handleChange(e) {
    const { id, value } = e.target;
    const newEducationDetails = {
      ...educationDetails,
      [id]: value,
    };
    onEducationDetailsChange(newEducationDetails);
  };

  return (
    <div className="form_container">
      <div className="form_header">
        <div>
          <img src={educationIcon} alt="education icon" className="icon big"/>
          <h2>Education</h2>
        </div>
        <img src={isShowForm ? arrowUp : arrowDown}
        alt="open menu img" className="icon" 
        onClick={showAddBtn}/>
      </div>
      {addBtn && 
        <button className="add_education" onClick={showForm}>
          + Education
        </button>
      }
      {isShowForm && 
        <form className="education_form">
        <InputGrp 
          id="school" labeltext="School"
          type="text" placeholder="Enter School/university"
          value={educationDetails.school} onChange={handleChange}
        />
        <InputGrp 
          id="degree" labeltext="Degree"
          type="text" placeholder="Enter Degree/field of study"
          value={educationDetails.degree} onChange={handleChange}
        />
        <InputGrp 
          id="startDate" labeltext="Start Date"
          type="date" value={educationDetails.startDate}
          onChange={handleChange}
        />
        <InputGrp 
          id="endDate" labeltext="End Date"
          type="date" value={educationDetails.endDate}
          onChange={handleChange}
        />
      </form>
      }
    </div>
  )
}