import React, { useState } from "react";
import InputGrp from "./InputGrp";
import '../styles/personalDetails.css'

export default function PersonalInput() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneNumberChange(e) {
    setPhoneNumber(e.target.value);
  }
  return (
    <form action="" className="personal_form">
      <h2>Personal Details</h2>
      <InputGrp 
      id="FirstName" labeltext="First Name" 
      type="text"  placeholder="First Name"
      value={firstName} onChange={(e) => handleFirstNameChange(e)}
      />
      <InputGrp 
      id="LastName" labeltext="Last Name" 
      type="text" placeholder="Last Name" 
      value={lastName} onChange={(e) => handleLastNameChange(e)}
      />
      <InputGrp 
      id="email" labeltext="Email" 
      type="email" placeholder="email@example.com" 
      value={email} onChange={(e) => handleEmailChange(e)}
      />
      <InputGrp 
      id="phoneNumber" labeltext="Phone Number" 
      type="number" placeholder="Phone Number"
      value={phoneNumber} onChange={(e) => handlePhoneNumberChange(e)}
      />
    </form>
  )
}