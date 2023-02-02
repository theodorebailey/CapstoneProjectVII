import React, {useState} from 'react';

// Import all components
import { Header, Footer } from './components/common';
import Figure from './components/Figure';
import Wrongletters from './components/Wrongletters';
import Word from './components/Word';
import Popup from './components/Popup';
import Notification from './components/Notification';

// We want to build our App, then identify what states we require
// Simple, we don't need state management
import './App.css';

const words = ['application', 'programming', 'interface', 'wizard'];

let selectedWord = words[Math.floor(Math.random() * words.length)];

let playable = true;

// state management
const correctLetters = [];
const wrongLetters = [];


function App() {

  const [playable, setPlayable] = useState(true); 
  const [correctLetters, setCorrectLetters] = useState();
  const [wrongLetters, setwrongLetters] = useState();


   return (
    <div className="App">
      <Header />
      <div className="container">
        <Figure />
        <Wrongletters />
        {/* <Word /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
