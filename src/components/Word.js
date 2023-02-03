import React from 'react'

// we need to display our word - selected word {destructer}, 

const Word = ({selectedWord, correctLetters}) => {
  return (
    <div className="word" id="word">
        {/* grab selected word parameter, split word, map word into array, parameter letter*/}
        {/* require index of letter */}
        {/* map through each letter in selected word, check if it is in correct letters array, if yes then display letter in span tag / blank via ternary operator */}
        {selectedWord.split('').map( (letter, i) => {
            return (
            // require a key for mapping, 
        <span className="letter" key={i}>
        {/* does it contain letter t/f - yes or blank */}
        {correctLetters.includes(letter) ? letter.toUpperCase() : ''}
        </span>
        )
    })}
    </div>
    )
}

export default Word