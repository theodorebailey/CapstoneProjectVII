import Figure from './Figure';
import Wrongletters from './Wrongletters';
import Word from './Word';
import Popup from './Popup';
import Notification from './Notification';

import React from 'react'

const Gamecontainer = () => {
  return (
    <div className="container">
      <Figure />
      <Wrongletters />
      <Word />
      <Popup />
      <Notification />      
    </div>
  )
}

export default Gamecontainer
