import React, { useState, useEffect, Component } from 'react';

import { Routes, Route } from 'react-router-dom';

// Import all components
import { Header, Footer } from './components/common';
import Figure from './components/Figure';
import Wrongletters from './components/Wrongletters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

import Portfolio from './components/Portfolio';

// import Dictionary from './dictionary.txt';

// importing same name?
import { showNotification as show } from './helpers/helpers';

// We want to build our App, then identify what states we require
// Simple, we don't need state management
import './App.css';

// Dictionary needs to be implmented
const words = ['application', 'programming', 'interface', 'wizard'];
// const words = './dictionary.txt';
// const dictionaryWords = words.
// const dictionary = './dictionary.txt';

// words, round down Math.random in relation to length of dictionary - pass as prop
let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

// Need array for correct letters chosen
const correctLetters = [];
// require array for wrong letters chosen
const wrongLetters = [];

function App() {

  // 
  const [playable, setPlayable] = useState(true); 
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);

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
          } else {
            // shows notification we've already entered our letter
            // imported function passed with parameter setShowNotification switch between states true and false;
            show(setShowNotification);
          }
        } else {
          // check if already included wrong letters
          if (!wrongLetters.includes(letter)) {
            // if doesn't include letter, setWrongLetters to the wrongLetters, split array and add new letter
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          } else {
            // if already included show a notification
            show(setShowNotification);
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

  class App extends Component {
    constructor(props) {
      super(props);
      this.state = {

      }
    }
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
      <Notification showNotification={showNotification} />
      <Footer />
    </div>
  );
}

export default App;
