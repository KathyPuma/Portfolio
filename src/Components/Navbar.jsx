import React from 'react';
import { Link } from 'react-router-dom'
import './Navbar.css'


function Navbar() {

    return (
        <div className='Navbar-stage'>
            <a href= 'https://docs.google.com/document/d/1B_LlHUV8gNFXVW_WE8ZNuYWC6WRj3QSw3rA7U6H3PYE/edit#heading=h.ytne192gwv0i' target="_blank" rel="noopener noreferrer" className='Nav-link'><h3 className='Nav-heading' >RESUME</h3></a>
            <Link className='Nav-link' to="/"><h3 className='Nav-heading'>ABOUT</h3></Link>
            <Link className='Nav-link' to="/projects"> <h3 className='Nav-heading'>PROJECTS</h3> </Link>{" "}
            <Link className='Nav-link' to="/skills"> <h3 className='Nav-heading'>SKILLS</h3> </Link>{" "}
            <Link className='Nav-link' to="/contact"> <h3 className='Nav-heading' >CONTACT</h3> </Link>{" "}
        </div>
    )

}

export default Navbar;