import React from 'react';
import InputGrp from './InputGrp';

export default function PersonalDetails() {
  return (
    <form action="" className='personal_details_form'>
      <h2>Personal Details</h2>
      <InputGrp id="firstName" 
      labeltext="First Name"
      type="text" placeholder="First Name"/>
    </form>
  )
}