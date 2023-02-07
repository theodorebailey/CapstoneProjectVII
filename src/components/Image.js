import React from 'react';

// import images
import img0 from './hangmandrawings/state1.GIF';
import img1 from './hangmandrawings/state2.GIF';
import img2 from './hangmandrawings/state3.GIF';
import img3 from './hangmandrawings/state4.GIF';
import img4 from './hangmandrawings/state5.GIF';
import img5 from './hangmandrawings/state6.GIF';
import img6 from './hangmandrawings/state7.GIF';
import img7 from './hangmandrawings/state8.GIF';
import img8 from './hangmandrawings/state9.GIF';
import img9 from './hangmandrawings/state10.gif';
import img10 from './hangmandrawings/state11.GIF';

// import wrong letters as counter
const Image = ({wrongLetters}) => {

  // errors is length of array
	const errors = wrongLetters.length;

   
// conditional statement related to errors to choose which image to show
  return (

     <div className="container">
      { errors === 0 && <img className="images" src={img0} alt="" /> }
      { errors === 1 && <img className="images" src={img1} alt="" /> }
      { errors === 2 && <img className="images" src={img2} alt="" /> }
      { errors === 3 && <img className="images" src={img3} alt="" /> }
      { errors === 4 && <img className="images" src={img4} alt="" /> }
      { errors === 5 && <img className="images" src={img5} alt="" /> }
      { errors === 6 && <img className="images" src={img6} alt="" /> }
      { errors === 7 && <img className="images" src={img7} alt="" /> }
      { errors === 8 && <img className="images" src={img8} alt="" /> }
      { errors === 9 && <img className="images" src={img8} alt="" /> }
      { errors === 10 && <img className="images" src={img9} alt="" />}
      { errors === 11 && <img className="images" src={img10} alt="" />}
    </div> 
  )
}

export default Image


