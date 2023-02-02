import React from 'react';

import img0 from './hangmandrawings/state1.GIF';
import img1 from './hangmandrawings/state2.GIF';
import img2 from './hangmandrawings/state3.GIF';
import img3 from './hangmandrawings/state4.GIF';
import img4 from './hangmandrawings/state5.GIF';
import img5 from './hangmandrawings/state6.GIF';
import img6 from './hangmandrawings/state7.GIF';
import img7 from './hangmandrawings/state8.GIF';
import img8 from './hangmandrawings/state9.GIF';
import img9 from './hangmandrawings/state10.GIF';
import img10 from './hangmandrawings/state11.GIF';


// bring in props by destructering - using wrong letters to count errors
const Figure = ({wrongLetters}) => {

	const errors = wrongLetters.length;

   

  return (
     <div className="container">
      { errors == 0 && <img src={img0} alt="" /> }
      { errors == 1 && <img src={img1} alt="" /> }
      { errors == 2 && <img src={img2} alt="" /> }
      { errors == 3 && <img src={img3} alt="" /> }
      { errors == 4 && <img src={img4} alt="" /> }
      { errors == 5 && <img src={img5} alt="" /> }
      { errors == 6 && <img src={img6} alt="" /> }
      { errors == 7 && <img src={img7} alt="" /> }
      { errors == 8 && <img src={img8} alt="" /> }
      { errors == 10 && <img src={img9} alt="" /> }
    </div>
  )
}

export default Figure

