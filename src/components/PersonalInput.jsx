import React from 'react';
import InputGrp from './InputGrp';

export default function PersonalInput({personalDetails, onPersonalDetailsChange}) {
  function handleChange(e) {
    const {id, value} = e.target;
    const newPersonalDetails = {
      ...personalDetails,
      [id]: value,
    };
    onPersonalDetailsChange(newPersonalDetails);
  }
  return (
    <form action="" className='personal_details_form'>
      <h2>Personal Details</h2>
      <InputGrp id="firstName" 
      labeltext="First Name"
      type="text" placeholder="First Name"
      value={personalDetails.firstName} onChange={handleChange}/>
      <InputGrp id="lastName" 
      labeltext="Last Name"
      type="text" placeholder="Last Name"
      value={personalDetails.lastName} onChange={handleChange}/>
      <InputGrp id="email"
      labeltext="Email" 
      type="email" placeholder="example@email.com"
      value={personalDetails.email} onChange={handleChange}
      />
      <InputGrp id="phoneNumber" 
      labeltext="Phone Number" 
      type="tel" placeholder="Enter phone number"
      value={personalDetails.phoneNumber} onChange={handleChange}/>
      <InputGrp id="address"
      labeltext="Adress"
      type="text" placeholder="City, Country"
      value={personalDetails.address} onChange={handleChange}
      />
    </form>
  )
}