import './App.css';
import React, { useState } from 'react'
import ScoreBoard from './components/scoreboard'
import Cards from './components/cards'
import arsenal from './components/img/arsenal.jpeg'
import atletico from './components/img/atletico.jpg'
import barca from './components/img/barca.jpeg'
import bayern from './components/img/bayern.jpeg'
import chelsea from './components/img/chelsea.jpeg'
import city from './components/img/city.png'
import dortmund from './components/img/dortmund.jpeg'
import inter from './components/img/inter.jpeg'
import juve from './components/img/juve.png'
import liverpool from './components/img/liverpool.jpg'
import milan from './components/img/milan.jpeg'
import psg from './components/img/psg.jpeg'
import real from './components/img/real.jpeg'
import united from './components/img/united.jpeg'

function App(props) {
  const cardArray = [arsenal, atletico, barca, bayern, chelsea, city, dortmund, inter, juve, liverpool, milan, psg, real, united];
    const [ cards, setCards] = useState(cardArray)
    const [ clickCard, setClickCard ] = useState([])
    const [ score, setScore ] = useState(0)
    const [ highScore, setHighScore ] = useState(0)

  function handleScore() {
      setScore(
        (score) => score + 1
      )
    }
  function handleHighScore() {
    if(score >= highScore) {
        setHighScore(score)
      }
  }
  function handleClick(e) {
      e.preventDefault();
      setCards(
        shuffle(cardArray),
        );
      if(!clickCard.includes(e.target.title)) {
        setClickCard(
          (clickCard) => [...clickCard, e.target.title]
          )
          handleScore()
          } else {
            reset()
            handleHighScore()
          }
  }
  function reset() {
    setScore(0)
    setClickCard([])
  }
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  return (
    <div className="App">
     <header>
      <h1>
        JDAVYDZ MEMORY GAME
      </h1>
     <ScoreBoard score={score} highScore={highScore}/>
     </header>
     <main>
       <Cards handleClick={handleClick} cards={cards}/>
     </main>
    </div>
  );
}
export default App;