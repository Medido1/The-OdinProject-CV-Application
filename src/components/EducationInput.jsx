import React, {useEffect, useState} from "react";
import educationIcon from '../assets/mortarboard.png';
import arrowDown from '../assets/arrowDown.png';
import arrowUp from '../assets/arrowUp.png';
import '../styles/educationInput.css';
import InputGrp from "./InputGrp";

export default function EducationInput({
  educationDetails,
  onEducationDetailsChange,
  educationList, 
  setEducationList,
  }) {

  const [isShowForm, setIsShowForm] = useState(false);
  const [addBtn, setAddBtn] = useState(false);
  const [isShowList, setIsShowList] = useState(false);

  const resetFormInputs = () => {
    onEducationDetailsChange({
      school: "",
      degree: "",
      startDate: "",
      endDate: ""
    });
  };

  function saveEducationInfo(e) {
    e.preventDefault();
    const newEducationDetails = {...educationDetails, id: Date.now()}
    const updatedList = [...educationList, newEducationDetails];
    localStorage.setItem("education_list", JSON.stringify(updatedList));
    setEducationList(updatedList);
    resetFormInputs();
    setIsShowForm(false);
    setAddBtn(true);
    setIsShowList(true); 
  } 

  function cancelInput(e) {
    e.preventDefault();
    resetFormInputs();
    showAddBtn();
  }

  function deleteEducation(e) {
    e.preventDefault();
    let formInfo = educationDetails;
    let index = getIndex(formInfo);
    educationList.splice(index, 1);
    setEducationList(educationList);
    resetFormInputs();
    showAddBtn();
  }

  function getIndex(info) {
    return educationList.findIndex(item => item.school === info.school && item.degree === info.degree) 
  }

  function showAddBtn() {
    if (isShowForm) {
      setIsShowForm(!isShowForm)
    } else {
      setAddBtn(!addBtn);
      setIsShowList(!isShowList);
    }
  }

  function showForm() {
    setIsShowForm(!isShowForm);
    showAddBtn();
  }

  function showEduacation(id) {
    showForm();
    let myList = educationList.filter(edu => edu.id === id);
    let selectedList = myList[0];
    onEducationDetailsChange({
      school: selectedList.school,
      degree: selectedList.degree,
      startDate: selectedList.startDate,
      endDate: selectedList.endDate,
    })
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
      {<ul className="education_list">
        {isShowList && 
          educationList.map(edu => (
            <li key={edu.id} onClick={() => showEduacation(edu.id)}>
              {edu.school}
            </li>
        ))}
      </ul>}
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
          <button className="form_btn" onClick={(e) => deleteEducation(e)}>Delete</button>
          <button className="form_btn" onClick={(e) => cancelInput(e)}>Cancel</button>
          <button className="form_btn" onClick={(e) => saveEducationInfo(e)}>Save</button>
        </div>
      </form>
      }
    </div>
  )
}