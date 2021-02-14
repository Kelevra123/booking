import React from 'react'
import './App.css'
import MainArea from "./MainArea";
import HiddenSection from "./HiddenSection";


function App() {

  return (
    <>
        <div className='main'>
            <MainArea/>
            <div className='mask1'/>

            <div className='overlay'/>
        </div>
        <HiddenSection/>
    </>
  );
}

export default App;
