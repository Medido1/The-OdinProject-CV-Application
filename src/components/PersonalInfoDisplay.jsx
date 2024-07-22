import React from 'react';

export default function PersonalInfoDisplay({personalDetails}) {
  return (
    <div className="personal_info_display">
      <h1>Personal Informations</h1>
      <div>
        <h2>{personalDetails.firstName}  {personalDetails.lastName}</h2>
        <p>{personalDetails.email}</p>
        <p>{personalDetails.phoneNumber}</p>
        <p>{personalDetails.address}</p>
      </div>
    </div>
  )
}