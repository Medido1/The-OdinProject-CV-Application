import React from 'react';
import emailIcon from '../assets/icons/mail.png';
import phoneIcon from '../assets/icons/phone.png';
import locationIcon from '../assets/icons/location.png';

export default function PersonalInfoDisplay({personalDetails}) {
  return (
    <div className="personal_info_display">
      <h2>{personalDetails.firstName}  {personalDetails.lastName}</h2>
      <div className='personal_details'>
        <p>
          <img src={emailIcon} className='icon'/>
          {personalDetails.email}
        </p>
        <p>
          <img src={phoneIcon} className='icon'/>
          {personalDetails.phoneNumber}
        </p>
        <p>
          <img src={locationIcon} className='icon'/>
          {personalDetails.address}
        </p>
      </div>
    </div>
  )
}