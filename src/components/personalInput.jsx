import React from 'react';

export default function PersonalDetails() {
  return (
    <form action="" className='personal_details_form'>
      <h2>Personal Details</h2>
      <div className='input_grp'>
        <label htmlFor='firstName'>First Name</label>
        <input type="text" id="firstName"
        placeholder='First Name'/>
      </div>
    </form>
  )
}