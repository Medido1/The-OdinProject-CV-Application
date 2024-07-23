import React, { useState } from 'react';
import InputGrp from './InputGrp';
import educationIcon from '../assets/icons/mortarboard.png';
import arrowUp from '../assets/icons/up-arrow.png';
import arrowDown from '../assets/icons/down-arrow.png';

export default function InfoInput(
  {info, oninfoChange, infoList, updateinfoList, infoType
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
    const newinfo = {
      ...info,
      [id]:value
    };
    oninfoChange(newinfo);
  }

  function resetFormInput() {
    oninfoChange({
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
    })
  }

  function saveInfo(e) {
    e.preventDefault();
    if (!info.id) { // If info.id is falsy, it means this is a new entry
      const newinfo = {...info, id : Date.now()};
      updateinfoList([...infoList, newinfo]);
    } else { // If info.id exists, update the existing entry
      const updatedList = infoList.map(item => 
        item.id === info.id ? {...info}:item
      )
      updateinfoList(updatedList);
    }
    
    setShowForm(false);
    setAddBtn(true);
    resetFormInput();
  }

  function modifyForm(index) {
    let selectedinfo = infoList[index];
    setAddBtn(!addBtn);
    setShowForm(true);
    oninfoChange(selectedinfo);
  }

  return (
    <div className='info_form_container'>
      <h2>
        <img src={educationIcon} className='icon'/>
        {infoType}
        <img  src ={showForm ? arrowDown : arrowUp} className='icon'
        onClick={handleShowForm}
        />
      </h2>
      {showForm  && 
        <>
          {addBtn && 
            <button className='btn add' onClick={showAddBtn}>+ {infoType}</button>
          }
          {infoList.length > 0 && addBtn && 
            <ul className='info_list'>
              {infoList.map((item,index) => 
                <li key={item.id} onClick={() => modifyForm(index)}>{item.school}</li>
              )}
            </ul>
          }
        </>
      }
      {showForm && !addBtn && 
      <form action="" className='info_form'>
        <InputGrp id="school" labeltext="School"
          type="text" placeholder="Enter School/university"
          value={info.school} onChange={handleChange}
        />
        <InputGrp id="degree" labeltext="Degree"
          type="text" placeholder="Enter degree/field of study"
          value={info.degree} onChange={handleChange}
        />
        <InputGrp id="startDate" labeltext="Start Date" type="date" 
          value={info.startDate} onChange={handleChange}
        />
        <InputGrp id="endDate" labeltext="end Date"type="date" 
          value={info.endDate} onChange={handleChange}
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
