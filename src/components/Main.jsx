import React, { useEffect, useState } from "react";
import '../styles/main.css';
import InputContainer from "./InputContainer";
import DisplayContainer from "./DisplayContainer";

export default function Main() {
  const [personalDetails, setPersonalDetails] = useState({
    firstName : "",
    lastName : "",
    email : "",
    phoneNumber: "",
  });

  function handlePersonalDetailsChange(newPersonalDetails) {
    setPersonalDetails(newPersonalDetails);
  };
  
  const [educationDetails, setEducationDetails] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
  });

  function handleEducationDetailsChange(newEducationDetails) {
    setEducationDetails(newEducationDetails)
  };

  const [educationList, setEducationList] = useState([]);

  useEffect(() => {
    const storedEducationList = JSON.parse(localStorage.getItem("education_list")) || [];
    setEducationList(storedEducationList);
  }, []);
  
  return (
    <main className="main">
      <InputContainer 
      personalDetails={personalDetails}
      onPersonalDetailsChange= {handlePersonalDetailsChange}
      educationDetails={educationDetails}
      onEducationDetailsChange={handleEducationDetailsChange}
      educationList={educationList}
      setEducationList={setEducationList}
      />
      <DisplayContainer 
      personalDetails={personalDetails}
      educationDetails={educationDetails}
      educationList={educationList}
      setEducationList={setEducationList}
      />
    </main>
  )
}