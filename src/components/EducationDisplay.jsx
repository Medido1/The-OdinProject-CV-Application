import React from 'react';

export default function EducationDisplay({educationDetails}) {
  return (
    <div className='education_display'>
      <h2>Education</h2>
      <div>
        <div>
          <p>{educationDetails.startDate}</p>
          <p>{educationDetails.endDate}</p>
        </div>
        <div>
          <h3>{educationDetails.school}</h3>
          <p>{educationDetails.degree}</p>
        </div>
      </div>
    </div>
  )
}