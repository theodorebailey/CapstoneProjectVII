import React from 'react';
import Buttongenerator from './../helpers/helpers';


function Buttons() {
  
  let buttons = 'abcdefghijklmnopqrstuvxyz'.split('').map(letter => 
    `
    <button className="btn btn-lg btn-primary m-2"
    id='`+ letter + `
    onClick="handleGuess('` + letter + `')"
    >

      ` + letter + `
    </button>
    `
    );

}

export default Buttons;
