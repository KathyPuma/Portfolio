import React from 'react';
import { Link } from 'react-router-dom'
import themeStore from '../redux/store/themeStore'
import './Navbar.css'


function Navbar() {
    const state = themeStore.getState();

    return (
        <div className='Navbar-stage'>
            <a href='https://docs.google.com/document/d/1FeL5Xaz68vxATI7M20YxR8OmIuLsg-CQ1S3g2KOkQAk/edit#' target="_blank" rel="noopener noreferrer" className='Nav-link'>
                <h3 className={state.theme.darkMode ? "Nav-heading-lightMode" : "Nav-heading-darkMode"}  >RESUME</h3></a>
            <Link className={state.theme.darkMode ? "Nav-link-lightMode" : "Nav-link-darkMode"} to="/">
                <h3 className={state.theme.darkMode ? "Nav-heading-lightMode" : "Nav-heading-darkMode"}  >ABOUT</h3>
            </Link>
            <Link className={state.theme.darkMode ? "Nav-link-lightMode" : "Nav-link-darkMode"} to="/projects">
                <h3 className={state.theme.darkMode ? "Nav-heading-lightMode" : "Nav-heading-darkMode"}>PROJECTS</h3>
            </Link>{" "}
            <Link className={state.theme.darkMode ? "Nav-link-lightMode" : "Nav-link-darkMode"} to="/skills">
                <h3 className={state.theme.darkMode ? "Nav-heading-lightMode" : "Nav-heading-darkMode"}>SKILLS</h3>
            </Link>{" "}
            <Link className={state.theme.darkMode ? "Nav-link-lightMode" : "Nav-link-darkMode"} to="/contact">
                <h3 className={state.theme.darkMode ? "Nav-heading-lightMode" : "Nav-heading-darkMode"} >CONTACT</h3>
            </Link>{" "}
        </div>
    )
}

export default Navbar;
