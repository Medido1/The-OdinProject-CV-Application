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

  function cancelInput(e) {
    e.preventDefault();
    resetFormInput();
    setAddBtn(!addBtn);
  }

  function deleteInfo(e) {
    e.preventDefault();
    setAddBtn(!addBtn);
    setShowForm(true);
    let selectedId = info.id;
    let remainingItems= infoList.filter(item => selectedId !== item.id);
    updateinfoList(remainingItems);
    resetFormInput();
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
                <li key={item.id} onClick={() => modifyForm(index)}>
                  {infoType === "Education" ? item.school : item.company}
                  </li>
              )}
            </ul>
          }
        </>
      }
      {showForm && !addBtn && 
      <form action="" className='info_form'>
        <InputGrp 
          id={infoType === "Education" ? "school" : "company"}
          labeltext={infoType === "Education" ? "School" : "Company"}
          type="text" 
          placeholder={infoType === "Education" ? "Enter School/university": "Enter company name"}
          value={infoType === "Education" ? info.school : info.company} 
          onChange={handleChange}
        />
        <InputGrp 
          id={infoType === "Education" ? "degree" : "title"}
          labeltext={infoType === "Education" ? "Degree" : "Title"}
          type="text" 
          placeholder={infoType === "Education" ? "Enter degree/field of study": "Enter position title"}
          value={infoType === "Education" ? info.degree : info.title} 
          onChange={handleChange}
        />
        <InputGrp id="startDate" labeltext="Start Date" type="date" 
          value={info.startDate} onChange={handleChange}
        />
        <InputGrp id="endDate" labeltext="end Date"type="date" 
          value={info.endDate} onChange={handleChange}
        />
        {infoType === "Experience" && 
        <div className='description_area'>
          <label htmlFor='descritpion'>Description</label>
          <textarea id="description" rows="5" cols="10" placeholder='Enter discription'
          value={info.discription} onChange={handleChange} maxLength="100"></textarea>
        </div>
        }
        <div className="btns">
          <button className="btn" onClick={deleteInfo}>Delete</button>
          <button className="btn" onClick={cancelInput}>Cancel</button>
          <button className="btn" onClick={saveInfo} >Save</button>
        </div>
      </form>
      }
    </div>
  )
}
