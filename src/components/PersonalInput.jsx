import React from 'react';
import InputGrp from './InputGrp';

export default function PersonalInput() {
  return (
    <form action="" className='personal_details_form'>
      <h2>Personal Details</h2>
      <InputGrp id="firstName" 
      labeltext="First Name"
      type="text" placeholder="First Name"/>
      <InputGrp id="lastName" 
      labeltext="Last Name"
      type="text" placeholder="Last Name"/>
      <InputGrp id="email"
      labeltext="Email" 
      type="email" placeholder="example@email.com" />
      <InputGrp id="phoneNumber" 
      labeltext="Phone Number" 
      type="tel" placeholder="Enter phone number"/>
      <InputGrp id="address"
      labeltext="Adress"
      type="text" placeholder="City, Country"/>
    </form>
  )
}