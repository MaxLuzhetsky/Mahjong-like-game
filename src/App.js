import React, { useState, useEffect } from 'react'
import './App.css';
import Bttn from './Bttn';

let arr = [
  { "number": 2, matched: false },
  { "number": "3", matched: false },
  { "number": "7", matched: false },
  { "number": "9", matched: false },
  { "number": "11", matched: false },
  { "number": "13", matched: false },
  { "number": "17", matched: false },
  { "number": "19", matched: false },
  { "number": "23", matched: false },
  { "number": "29", matched: false },
  { "number": "31", matched: false },
  { "number": "37", matched: false },
  { "number": "41", matched: false },
  { "number": "43", matched: false },
  { "number": "47", matched: false }
]

function App() {

  const [arrNew, setArrNew] = useState([])
  const [numOne, setNumOne] = useState(null)
  const [numTwo, setNumTwo] = useState(null)
  const [stop, setStop] = useState(true)
  const [disble , setDisble] = useState(true)
  const [startB , setStartB] = useState(false)










  const handleChoice = (card) => {
    numOne ? setNumTwo(card) : setNumOne(card)

  }

  useEffect(() => {

    if (numOne && numTwo) {
      if (numOne.number === numTwo.number) {
        setArrNew(prevCard => {
          return prevCard.map(card => {
            if (card.number === numOne.number) {
              return { ...card, matched: true }
            } else {
              return card
            }
          })
        })
        resetTurn();
      } else {
        console.log('не нормас')

        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [numOne, numTwo])
  console.log(arrNew)

  function resetTurn() {
    setNumOne(null)
    setNumTwo(null)

  }

  const shuffle = () => {

    const newArr = [...arr, ...arr]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))


    setArrNew(newArr)


  }
  const startGame = () => {

    shuffle();
    setT()
    setStartB(true)


  }
  const stopFunc = () => {
    setStop(false)
  }
 
  const setT = () => {
    let stt = 0
    if (disble) {
    stt = setTimeout(() => { stopFunc(); setDisble(false) }, 4000)
    }else{
      clearTimeout(stt)
    }
  }

  
  
  return (
    <div className="App">
      <h1 className='title'>Mahjong-like game</h1>
      <div className="start_button_container">
      <button type='button' className={startB ? 'start_button pressed' : 'start_button'} onClick={startGame} >start</button>
      </div>
      <div className='buttons'>
        {arrNew.map(num => (<Bttn
          numValue={num}
          key={num.id}
          handleChoice={handleChoice}
          flipped={num === numOne || num === numTwo || num.matched || stop}



        >

        </Bttn>))}

      </div>


    </div>
  );

}

export default App;

