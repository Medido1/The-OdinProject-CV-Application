import React, { useState } from 'react';
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
    <form action="" className='education_form'>
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
    </form>
  )
}