import React, { useState } from 'react'
import './App.css';

export default function Bttn({ numValue, handleChoice, flipped }) {



  let stop = true


  function timeout() {
    flipped = true


  }
  let stt = 0
  function setT() {
    stt = setTimeout(timeout(), 2000)


    if (stt) {
      clearTimeout(stt)
    }
  }











  const handleClick = () => {
   
      handleChoice(numValue)
    

  }
  return (
    <>
      <div className=''>
        <button
          className={flipped ? "button " : "button  invisible"}
          onClick={handleClick}


        >{numValue.number}</button>

      </div>
    </>


  )
}

