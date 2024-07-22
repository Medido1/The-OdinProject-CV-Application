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
  return (
    <main className='main'>
      <InputContainer 
      personalDetails={personalDetails}
      onPersonalDetailsChange = {handlePersonalDetailsChange}
      />
      <DisplayContainer
      personalDetails={personalDetails}
      />
    </main>
  )
}