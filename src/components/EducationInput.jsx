import React, { useState } from 'react';
import InputGrp from './InputGrp';
import educationIcon from '../assets/icons/mortarboard.png';
import arrowUp from '../assets/icons/up-arrow.png';
import arrowDown from '../assets/icons/down-arrow.png';

export default function EducationInput() {
  const [showForm, setShowForm] = useState(false);
  const [addBtn, setAddBtn] = useState(true);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  function showAddBtn() {
    setAddBtn(!addBtn)
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
      {addBtn && 
      <button className='btn add' onClick={showAddBtn}>+ Education</button>
      }
      {showForm && 
      <form action="" className='education_form'>
        <InputGrp id="school" labeltext="School"
          type="text" placeholder="Enter School/university"
        />
        <InputGrp id="degree" labeltext="Degree"
          type="text" placeholder="Enter degree/field of study"
        />
        <InputGrp id="startDate" labeltext="Start Date" type="date" />
        <InputGrp id="endDate" labeltext="end Date"type="date" />
      </form>
      }
    </div>
  )
}