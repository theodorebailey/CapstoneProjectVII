import React, { useEffect } from 'react'

import { checkWin } from './../helpers/helpers';
// remember to destructer your props
// set playable is a side effect
const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain } ) => {

  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if ( checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Congratulations! You have won!';
    playable = false;
  } else if (checkWin(correctLetters, wrongLetters, selectedWord) == 'lose') {
    finalMessage = "Unfortunately, you have lost!";
    finalMessageRevealWord = `...the word was: ${selectedWord}`;
    playable = false;
  } 

  useEffect(() => setPlayable(playable));

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className="popup">
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        {/* playAgain needs to change state */}
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>

  )
}

export default Popup