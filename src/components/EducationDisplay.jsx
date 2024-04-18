import React from "react";
import '../styles/educationDisplay.css';

export default function EducationDisplay({educationDetails}) {
  return (
    <div className="education_display">
      <h2>Education</h2>
      <div className="education">
        <h2>{educationDetails.school}</h2>
        <div className="education_info">
          <p className="degree">{educationDetails.degree}</p>
          <p className="start_date">{educationDetails.startDate}</p>
          <p className="end_date">{educationDetails.endDate}</p>
        </div>
      </div>
    </div>
  )
}