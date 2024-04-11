import React from "react";
import '../styles/personalDisplay.css';
import emailIcon from '../assets/mail.png';
import phoneIcon from '../assets/phone-call.png';

export default function PersonalDisplay({personalDetails}) {
  return (
    <div className="personal_display">
      <h2>{personalDetails.firstName} {personalDetails.lastName}</h2>
      <div>
        {personalDetails.email &&
        <>
          <img src={emailIcon} alt="email icon" className="icon" />
          <p>{personalDetails.email}</p>
        </>
        }
      </div>
      <div>
        {personalDetails.phoneNumber &&
        <>
          <img src={phoneIcon} alt="phone icon" className="icon" />
          <p>{personalDetails.phoneNumber}</p>
        </>
        }
      </div>
    </div>
  )
}