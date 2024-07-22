import React from 'react';
import PersonalInfoDisplay from './PersonalInfoDisplay';

export default function displayContainer({personalDetails}) {
  return (
    <PersonalInfoDisplay personalDetails={personalDetails}/>
  )
}