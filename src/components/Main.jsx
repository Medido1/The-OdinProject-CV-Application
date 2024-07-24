import React, { useState } from 'react';
import InputContainer from './InputContainer';
import DisplayContainer from './DisplayContainer';
import removeIcon from '../assets/icons/remove.png';
import CustomiseContainer from './CustomizeContainer';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import pdfIcon from '../assets/icons/pdf.png';

export default function Main() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  })

  function handlePersonalDetailsChange(newPersonalDetails) {
    setPersonalDetails(newPersonalDetails);
  }

  const [educationDetails, setEducationDetails] = useState({
    school:"",
    degree:"",
    startDate: "",
    endDate: "",
  })

  function handleEducationDetailsChange(newEducationDetails){
    setEducationDetails(newEducationDetails);
  }

  const [educationList, setEducationList] = useState([]);

  function updateEducationList(newEducationList) {
    setEducationList(newEducationList)
  }

  const [experienceDetails, setExperienceDetails] = useState({
    company: "",
    title:  "",
    startDate: "",
    endDate:"",
    description: "",
  })

  function handleExperienceDetailsChange(newExperienceDetails) {
    setExperienceDetails(newExperienceDetails)
  }

  const [experienceList, setExperienceList] = useState([]);

  function updateExperienceList(newExperienceList) {
    setExperienceList(newExperienceList)
  }

  function clearResume() {
    updateEducationList([]);
    updateExperienceList([]);
    setPersonalDetails({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      address: "",
    })
  }

  function saveAsPDF() {
    const input = document.getElementById('resume');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('resume.pdf');
    });
  }

  return (
    <main className='main'>
      <div>
        <div className='btns'>
          <button className='clear_btn' onClick={clearResume}>
            <img src={removeIcon} alt='reset cv' className='icon'/>
            <p>Clear Resume</p>
          </button>
          <button className='save_btn' onClick={saveAsPDF}>
            <img src={pdfIcon} alt='save as pdf' className='icon'/>
            <p>Save</p>
          </button>
        </div>
        <InputContainer 
        personalDetails={personalDetails}
        onPersonalDetailsChange = {handlePersonalDetailsChange}
        educationDetails={educationDetails}
        onEducationDetailsChange={handleEducationDetailsChange}
        educationList={educationList}
        updateEducationList={updateEducationList}
        experienceDetails={experienceDetails}
        onExperienceDetailsChange={handleExperienceDetailsChange}
        experienceList={experienceList}
        updateExperienceList={updateExperienceList}
      />
      </div>
      <div id="resume">
      <DisplayContainer 
        personalDetails={personalDetails}
        educationDetails={educationDetails}
        educationList={educationList}
        experienceDetails={experienceDetails}
        experienceList={experienceList}
      />
      </div>
      <CustomiseContainer />
    </main>
  )
}