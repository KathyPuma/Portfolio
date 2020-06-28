import React from 'react'

import GithubLogo from './Icons/githubIcon.png'
import LinkedinLogo from './Icons/LinkedinIcon.png'
import './Contact.css'


function Contact() {
    return (
        <div className='Contact-stage'>
            <div className='Contact-container'>
                <div className="Contact-icons">

                    <div className='github-link'>
                        <a href='https://github.com/KathyPuma' >
                            <img className='icons' alt='github logo' src={GithubLogo} />
                            Github
                        </a>
                    </div>

                    <div className='linkedin-link'>
                        <a href='https://www.linkedin.com/in/kathypuma/'>
                            <img className='icons' alt='linkedin logo' src={LinkedinLogo} />Linkedin
                        </a>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Contact; 