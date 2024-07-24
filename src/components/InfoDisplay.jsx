import React from 'react';

export default function InfoDisplay({info, infoList, infoType}) {
  return (
    <div className='education_display'>
      <h2>{infoType === "Education" ? "Education" : "Experience"}</h2>
      {infoList.length > 0 && 
        <div>
          {infoList.map((i) => {
            return (
              <div key={i.id} className='education_item'>
                <div className='dates'>
                  <p>{i.startDate}</p>
                  <p>{i.endDate}</p>
                </div>
                <div>
                  <h3>{infoType === "Education"? i.school: i.company}</h3>
                  <p>{infoType === "Education"? i.degree: i.title}</p>
                </div>
                {infoType === "Experience" && 
                  <div className='description_section'>
                    <p>{i.description}</p>
                  </div>
                }
              </div>
            )
          })}
        </div>
      }
      {!info.id && ( // Check if info.id is truthy
        <div className='education_item'>
          <div className='dates'>
            <p>{info.startDate}</p>
            <p>{info.endDate}</p>
          </div>
          <div>
            <h3>{infoType === "Education"? info.school: info.company}</h3>
            <p>{infoType === "Education"? info.degree: info.title}</p>
          </div>
          {infoType === "Experience" && 
          <div className='description_section'>
            <p>{info.description}</p>
          </div>
          }
        </div>
      )}
    </div>
  )
}
