import React from 'react';
import InputContainer from './InputContainer';
import DisplayContainer from './DisplayContainer';

export default function Main() {
  return (
    <main className='main'>
      <InputContainer className="input_container"/>
      <DisplayContainer />
    </main>
  )
}