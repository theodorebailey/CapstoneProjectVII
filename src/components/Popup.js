import React, { useEffect } from 'react';
import './../App.css'

// import function from helpers
import { checkWin } from './helpers';
// remember to destructer your props
// set play is a side effect
// check correct letters, wrong letters, selectedWord for game, setPlay boolean and add play again
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlay, playAgain } ) => {

  // create message for win or loss
  let winorlossMessage = '';
  let revealWord = '';
  let play = true;

  // check win function for correct letters wrong letters and selected word props
  if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    winorlossMessage = "Congratulations, you've won this round.";
    play = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) == 'lose') {
    winorlossMessage = "Uh oh, you've lost this time!";
    revealWord = `...the word was: ${selectedWord}`;
    play = false;
  } 

  // use effect to uset play value
  useEffect(() => setPlay(play));

  return (
    <div>
      <div className="popup">
        {/* win / loss message depending on outcome */}
        <h2>{winorlossMessage}</h2>
        {/* reveals word held in container */}
        <h3>{revealWord}</h3>
        {/* playAgain needs to change state */}
        <button onClick={playAgain}>Play again?</button>
      </div>
    </div>

  )
}

export default Popup