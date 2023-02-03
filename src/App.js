import React, { useState, useEffect, Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import all components
import { Header } from './components/common';
import Figure from './components/Figure';
import Wrongletters from './components/Wrongletters';
import Word from './components/Word';
import Popup from './components/Popup';
import Portfolio from './components/Portfolio';

import { Dictionary } from './helpers/Dictionary';

// import Dictionary from './dictionary.txt';

// Dictionary needs to be implmented
// const words = ['application', 'programming', 'interface', 'wizard'];
// words, round down Math.random in relation to length of dictionary - pass as prop
// let selectedWord = words[Math.floor(Math.random() * words.length)];

var words = Dictionary.split("\n");

let selectedWord = words[Math.floor(Math.random() * words.length)];

// Store correct letters
const correctLetters = [];
// Store wrong letters
const wrongLetters = [];

let playable = true;

function App() {

  // 
  const [playable, setPlayable] = useState(true); 
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  // use effect will use any side effects of our app
  // By adding our event listener here, everytime our app re-renders our event listener will be added
  useEffect(() => {
    // our event has parameters
    const handleKeydown = event => {
      // key and ascii code using react
    const {key, keyCode} = event;
      // if playable true and event object keyCode is between alphabet range
      // ensure letters read as such - if letter key
      if (playable && keyCode >= 65 && keyCode <= 90) {
        // set letter to lowerCase
        const letter = key.toLowerCase();
        // Now if the selected word contains the letter (passed as parameter)
        if (selectedWord.includes(letter)) {
          // if correct letters doesn't include the letter - add to letters
          if (!correctLetters.includes(letter)) {
            // setCorrectLetters to currentLetters, spread operator for currentLetters, then add new letter evaluated to true
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
            // run display word function
          }
        } else {
          // check if already included wrong letters
          if (!wrongLetters.includes(letter)) {
            // if doesn't include letter, setWrongLetters to the wrongLetters, split array and add new letter
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          }
        }
      }
  }
  // use effect will help with event listener
  // everytime it renders we don't want to readd an event listener meaning we need to clean up after each render
  window.addEventListener('keydown', handleKeydown);

  // clean up so we only have one event listener running each time
  return () => window.removeEventListener('keydown', handleKeydown);

  // the empty array will stop this being called everytime the app renders - blank array will make it run only on initial render
  // anytime correctLetters, wrongLetters and playable get updated will call this function, and on initial render
  }, [correctLetters, wrongLetters, playable]);

  function playAgain () {
    // set playable to true
    setPlayable(true);
  
    // empty all game dependent arrays
    setCorrectLetters([]);
    setWrongLetters([]);
  
    const randomSelector = Math.floor(Math.random() * words.length);
    selectedWord = words[randomSelector];
  
  }

  
   return (
    <div className="App">
      <Header />
      <Routes>
          <Route path='/Portfolio' element={<Portfolio />} />
        </Routes>
        <div className="game-container">
        <Figure wrongLetters={wrongLetters} />
        <Wrongletters wrongLetters={wrongLetters} />
        {/* pass down as props */}
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlayable={setPlayable} playAgain={playAgain}/>
    </div>
  );
}

export default App;
