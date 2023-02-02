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


// bring in props by destructering
const Figure = ({wrongLetters}) => {
	const errors = wrongLetters.length;

   

  return (
    <svg height="250" width="200" className="figure-container">
      {/* <!-- Rod --> */}
      <line x1="60" y1="20" x2="140" y2="20" />
      <line x1="140" y1="20" x2="140" y2="50" />
      <line x1="60" y1="20" x2="60" y2="230" />
      <line x1="20" y1="230" x2="100" y2="230" />

      {/* <!-- Head --> */}
      {errors > 0 &&
        <circle cx="140" cy="70" r="20" />
      }
      {/* <!-- Body --> */}
      {errors > 1 &&
        <line x1="140" y1="90" x2="140" y2="150" />
      }
      {/* <!-- Arms --> */}
      {errors > 2 &&
        <line x1="140" y1="120" x2="120" y2="100" />
      }
      {errors > 3 &&
        <line x1="140" y1="120" x2="160" y2="100" />
      }
      {/* <!-- Legs --> */}
      {errors > 4 &&
        <line x1="140" y1="150" x2="120" y2="180" />
      }
      {errors > 5 &&
        <line x1="140" y1="150" x2="160" y2="180" />
      }
    </svg>

  )
}

export default Figure

   // <div className="container">
    //   { errors > 0 && <img src={img0} alt="" /> }
    //   { errors > 1 && <img src={img1} alt="" /> }
    //   { errors > 2 && <img src={img2} alt="" /> }
    //   { errors > 3 && <img src={img3} alt="" /> }
    //   { errors > 4 && <img src={img4} alt="" /> }
    //   { errors > 5 && <img src={img5} alt="" /> }
    //   { errors > 6 && <img src={img6} alt="" /> }
    //   { errors > 7 && <img src={img7} alt="" /> }
    //   { errors > 8 && <img src={img8} alt="" /> }
    //   { errors > 9 && <img src={img9} alt="" /> }
    //   { errors > 10 && <img src={img10} alt="" /> }
    // </div>