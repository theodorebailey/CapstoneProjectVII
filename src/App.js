import React, { useState, useEffect, Component } from 'react';
import './App.css';

// Import all components
import { Header } from './components/common';
import Image from './components/Image';
import Wrongletters from './components/Wrongletters';
import Word from './components/Word';
import Popup from './components/Popup';
import Help from './components/Help';

import { Dictionary } from './components/Dictionary';

// set words to dictionary
let words = Dictionary.split("\n");
// use Math to select random word from dictionary
let selectedWord = words[Math.floor(Math.random() * words.length)];

// Store correct letters
const correctLetters = [];
// Store wrong letters
const wrongLetters = [];

function App() {

  // set play state to true
  const [play, setPlay] = useState(true); 
  // use state for all correct buttons set - reset state on each successful guess
  const [correctLetters, setCorrectLetters] = useState([]);
  // use state for wrong letters - reset state on each unsuccessful guess
  const [wrongLetters, setWrongLetters] = useState([]);

  // use effect will use any side effects of our app
  // By adding our event listener here, everytime our app re-renders our event listener will be added
  useEffect(() => {
    // our event has parameters
    const handleKeydown = event => {
      // key and ascii code using react
    const {key, keyCode} = event;
      // if play true and event object keyCode is between alphabet range
      // ensure letters read as such - if letter key
      if (play && keyCode >= 65 && keyCode <= 90) {
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
  // anytime correctLetters, wrongLetters and play get updated will call this function, and on initial render
  }, [correctLetters, wrongLetters, play]);

  function playAgain () {
    // set play to true
    setPlay(true);
  
    // empty all game dependent arrays
    setCorrectLetters([]);
    setWrongLetters([]);
  
    const randomSelector = Math.floor(Math.random() * words.length);
    selectedWord = words[randomSelector];
  
  }

  // handleGuess(e) {
  //   let letter = e.target.value;
  //   this.setState((st) => ({
  //     guessed: st.guessed.add(letter),
  //     noOfWrong: st.noOfWrong + (st.answer.includes(letter) ? 0 : 1),

  //   }))

  // }

  // generateKeypad () {
  //   return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
  //     <button key={letter} value={letter} onClick={this.handleGuess} disabled={this.state.guess.has(letter)}>{letter}</button>
  //   ))
  // }

  // create one component for all components
   return (
    <div className="App">
      <Header />
        <div className="container">
        <Image wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
        <Wrongletters wrongLetters={wrongLetters} />
      </div>
      <Popup correctLetters={correctLetters} wrongLetters={wrongLetters} selectedWord={selectedWord} setPlay={setPlay} playAgain={playAgain}/>
      <Help /> 
    </div>
  );
}

export default App;
