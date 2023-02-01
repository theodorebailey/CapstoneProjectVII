// import react
import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

// create component
function Navbar () {

    return (
        <section className="navbar">
            <Link to="/" className="navbar-item">Home</Link>
            <Link to="/about" className="navbar-item">About</Link>
            <Link to="/portfolio" className="navbar-item">Portfolio</Link>
            <Link to="/contact" className="navbar-item">Contact</Link>
        </section>
    )

}

// export component
export default Navbar;