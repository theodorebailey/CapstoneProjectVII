// import react
import React from 'react';
// we can move location as long as items remain in common folder
import { Navbar } from './../index';

import './Header.css';

// create component
function Header () {

    return (
        <section className="header">
            {/* top section nav bar */}
            <div className="header-top">
                {/* logo section */}
                <div className="header-top__logo">
                    <a href='/' className='header-logo'>Hangman</a>
                    {/* <img id='fridgeImage' alt={"logo"} /> */}
                </div>
                {/* navbar section */}
                <div className='header-top__navbar'>
                    <div className="header-top__navigation">
                        {/* <Navbar /> */}
                    </div>
                    <hr className='header-top__seperator'/>
                </div>
            </div>
            {/* header bottom section navbar */}
            <section className='header-bottom'>
                {/* unknown */}
                <section className='header-bottom__phone'>
                    0123 4567 8910
                </section>
                {/* email section */}
                <section className='header-bottom__email'>
                    fridge_excess@gmail.com
                </section>
            </section>
        </section>
    )

}

// export component
export default Header;