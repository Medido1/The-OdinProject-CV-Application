import React, { useState } from 'react';
import InputGrp from './InputGrp';
import educationIcon from '../assets/icons/mortarboard.png';
import arrowUp from '../assets/icons/up-arrow.png';
import arrowDown from '../assets/icons/down-arrow.png';

export default function EducationInput(
  {educationDetails, onEducationDetailsChange, educationList, updateEducationList,
  }) {
  const [showForm, setShowForm] = useState(false);
  const [addBtn, setAddBtn] = useState(true);
  
  function handleShowForm() {
    setShowForm(!showForm);
  }

  function showAddBtn() {
    setAddBtn(!addBtn);
    setShowForm(true);
  }

  function handleChange(e) {
    const {id, value} = e.target;
    const newEducationDetails = {
      ...educationDetails,
      [id]:value
    };
    onEducationDetailsChange(newEducationDetails);
  }

  function resetFormInput() {
    onEducationDetailsChange({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    })
  }

  function saveInfo(e) {
    e.preventDefault();
    if (!educationDetails.id) { // If educationDetails.id is falsy, it means this is a new entry
      const newEducationDetails = {...educationDetails, id : Date.now()};
      updateEducationList([...educationList, newEducationDetails]);
    } else { // If educationDetails.id exists, update the existing entry
      const updatedList = educationList.map(item => 
        item.id === educationDetails.id ? {...educationDetails}:item
      )
      updateEducationList(updatedList);
    }
    
    setShowForm(false);
    setAddBtn(true);
    resetFormInput();
  }

  function modifyForm(index) {
    let selectedEducation = educationList[index];
    setAddBtn(!addBtn);
    setShowForm(true);
    onEducationDetailsChange(selectedEducation);
  }

  return (
    <div className='education_form_container'>
      <h2>
        <img src={educationIcon} className='icon'/>
        Education
        <img  src ={showForm ? arrowDown : arrowUp} className='icon'
        onClick={handleShowForm}
        />
      </h2>
      {showForm  && 
        <>
          {addBtn && 
            <button className='btn add' onClick={showAddBtn}>+ Education</button>
          }
          {educationList.length > 0 && addBtn && 
            <ul className='education_list'>
              {educationList.map((item,index) => 
                <li key={item.id} onClick={() => modifyForm(index)}>{item.school}</li>
              )}
            </ul>
          }
        </>
      }
      {showForm && !addBtn && 
      <form action="" className='education_form'>
        <InputGrp id="school" labeltext="School"
          type="text" placeholder="Enter School/university"
          value={educationDetails.school} onChange={handleChange}
        />
        <InputGrp id="degree" labeltext="Degree"
          type="text" placeholder="Enter degree/field of study"
          value={educationDetails.degree} onChange={handleChange}
        />
        <InputGrp id="startDate" labeltext="Start Date" type="date" 
          value={educationDetails.startDate} onChange={handleChange}
        />
        <InputGrp id="endDate" labeltext="end Date"type="date" 
          value={educationDetails.endDate} onChange={handleChange}
        />
        <div className="btns">
          <button className="btn">Delete</button>
          <button className="btn">Cancel</button>
          <button className="btn" onClick={saveInfo}>Save</button>
        </div>
      </form>
      }
    </div>
  )
}

/* const newEducationDetails = {
      school: educationList[index].school,
      degree: educationList[index].degree,
      startDate: educationList[index].startDate,
      endDate: educationList[index].endDate,
      id: educationList[index].id,
    }; */