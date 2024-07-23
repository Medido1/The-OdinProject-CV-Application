import React from 'react';

export default function InfoDisplay({educationDetails, educationList}) {
  return (
    <div className='education_display'>
      <h2>Education</h2>
      {educationList.length > 0 && 
        <div>
          {educationList.map((i) => {
            return (
              <div key={i.id} className='education_item'>
                <div>
                  <p>{i.startDate}</p>
                  <p>{i.endDate}</p>
                </div>
                <div>
                  <h3>{i.school}</h3>
                  <p>{i.degree}</p>
                </div>
              </div>
            )
          })}
        </div>
      }
      {!educationDetails.id && ( // Check if educationDetails.id is truthy
        <div className='education_item'>
          <div>
            <p>{educationDetails.startDate}</p>
            <p>{educationDetails.endDate}</p>
          </div>
          <div>
            <h3>{educationDetails.school}</h3>
            <p>{educationDetails.degree}</p>
          </div>
        </div>
      )}
    </div>
  )
}
