import React, { useState } from 'react';
import InputContainer from './InputContainer';
import DisplayContainer from './DisplayContainer';
import removeIcon from '../assets/icons/remove.png';

export default function Main() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  })

  function handlePersonalDetailsChange(newPersonalDetails) {
    setPersonalDetails(newPersonalDetails);
  }

  const [educationDetails, setEducationDetails] = useState({
    school:"",
    degree:"",
    startDate: "",
    endDate: "",
  })

  function handleEducationDetailsChange(newEducationDetails){
    setEducationDetails(newEducationDetails);
  }

  const [educationList, setEducationList] = useState([]);

  function updateEducationList(newEducationList) {
    setEducationList(newEducationList)
  }

  const [experienceDetails, setExperienceDetails] = useState({
    company: "",
    title:  "",
    startDate: "",
    endDate:"",
    description: "",
  })

  function handleExperienceDetailsChange(newExperienceDetails) {
    setExperienceDetails(newExperienceDetails)
  }

  const [experienceList, setExperienceList] = useState([]);

  function updateExperienceList(newExperienceList) {
    setExperienceList(newExperienceList)
  }

  function clearResume() {
    updateEducationList([]);
    updateExperienceList([]);
    setPersonalDetails({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    })
  }
 
  return (
    <main className='main'>
      <div>
        <button className='clear_btn' onClick={clearResume}>
          <img src={removeIcon} alt='remove icon' className='icon'/>
          <p>Clear Resume</p>
        </button>
        <InputContainer 
        personalDetails={personalDetails}
        onPersonalDetailsChange = {handlePersonalDetailsChange}
        educationDetails={educationDetails}
        onEducationDetailsChange={handleEducationDetailsChange}
        educationList={educationList}
        updateEducationList={updateEducationList}
        experienceDetails={experienceDetails}
        onExperienceDetailsChange={handleExperienceDetailsChange}
        experienceList={experienceList}
        updateExperienceList={updateExperienceList}
      />
      </div>
      <DisplayContainer
      personalDetails={personalDetails}
      educationDetails={educationDetails}
      educationList={educationList}
      experienceDetails={experienceDetails}
      experienceList={experienceList}
      />
    </main>
  )
}