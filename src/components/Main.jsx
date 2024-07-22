import React, { useState } from 'react';
import InputContainer from './InputContainer';
import DisplayContainer from './DisplayContainer';

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
  
  return (
    <main className='main'>
      <InputContainer 
      personalDetails={personalDetails}
      onPersonalDetailsChange = {handlePersonalDetailsChange}
      educationDetails={educationDetails}
      onEducationDetailsChange={handleEducationDetailsChange}
      />
      <DisplayContainer
      personalDetails={personalDetails}
      educationDetails={educationDetails}
      />
    </main>
  )
}