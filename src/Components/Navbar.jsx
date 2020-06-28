import React from 'react';
import { Link } from 'react-router-dom'
import Resume from './KathyPuma_Resume.pdf'
import './Navbar.css'


function Navbar() {

    return (
        <div className='Navbar-stage'>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className='Nav-link'><h3 className='Nav-heading' >RESUME</h3></a>
            <Link className='Nav-link' to="/"><h3 className='Nav-heading'>ABOUT</h3></Link>
            <Link className='Nav-link' to="/projects"> <h3 className='Nav-heading'>PROJECTS</h3> </Link>{" "}
            <Link className='Nav-link' to="/skills"> <h3 className='Nav-heading'>SKILLS</h3> </Link>{" "}
            <Link className='Nav-link' to="/contact"> <h3 className='Nav-heading' >CONTACT</h3> </Link>{" "}
        </div>
    )

}

export default Navbar;