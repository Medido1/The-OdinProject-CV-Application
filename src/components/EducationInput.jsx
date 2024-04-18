import React, { useEffect, useState } from "react";
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
  const [isShowList, setIsShowList] = useState(false);
  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const localEducationList = JSON.parse(localStorage.getItem("education_list")) || [];
    setEducationList(localEducationList);
  }, []);

  function saveEducationInfo(e) {
    e.preventDefault();
    const newEducationDetails = {...educationDetails, id: Date.now()};
    const updatedList = [...educationList, newEducationDetails];
    setEducationList(updatedList);
    localStorage.setItem("education_list", JSON.stringify(updatedList));
    setIsShowForm(false);
    setAddBtn(true);
    renderEducationList();
  } 

  function clearEducationList() { /* clear the stored list for debugging */
    setEducationList([]);
    localStorage.removeItem("education_list");
  }

  function renderEducationList() {
    setIsShowForm(false);
    setIsShowList(true);
  }

  function showAddBtn() {
    setAddBtn(!addBtn);
    setIsShowList(!isShowList);
  }

  function showForm() {
    setIsShowForm(!isShowForm);
    showAddBtn();
    setIsShowList(false);
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
      {isShowList && 
        educationList.map(edu => (
          <ul className="education_list">
            <li key={edu.id}>
              {edu.school}
            </li>
          </ul>
        
      ))}
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
        <div className="btns">
          <button className="form_btn">Delete</button>
          <button className="form_btn">Cancel</button>
          <button className="form_btn" onClick={(e) => saveEducationInfo(e)}>Save</button>
        </div>
      </form>
      }
    </div>
  )
}