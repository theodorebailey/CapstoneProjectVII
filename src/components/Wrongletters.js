import React from 'react'

// requires our event listener

let guesses = 11;

// pass down wrongLetters as paramter, remember to destructor (unpack values nested in our array / objects)
const Wrongletters = ({wrongLetters}) => {
  return (
    <div className="wrong-letters-container">
        <div>
            {/* if greater than 0 AND  */}
            {/* {wrongLetters.length > 0 && <p>Wrong</p>} */}
            {/* map through letters, use index i, set key to i in span and   */}
            {wrongLetters
                .map( (letter, i) => <span key={i}>{letter.toUpperCase()}</span>)
                // reduce will add our comma between every span which will be assigned our letters
                .reduce((prev, curr) => prev == null ? [curr] : [prev, ', ', curr], null)}
        </div>
        <p className="guesses-left">You have: {guesses - wrongLetters.length} guesses left after {wrongLetters.length} incorrect guesses. </p>
    </div>
  )
}

export default Wrongletters