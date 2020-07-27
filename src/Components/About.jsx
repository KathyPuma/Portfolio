import React from 'react'
import Footer from './Footer'
import KathyPuma from './Projects/KathyPuma.jpg'
import './About.css'


function About() {
    return (
        <div className='About-stage'>
            <div className='About-container'>
            <img src = {KathyPuma} alt='profile-photo' className ='profile-photo'/>
                <div className='About-card'>                   
                    <p className='About-description'>
                        Graduated with a bachelor's degree in Accounting and Economics but grew a passion for tech in college after taking a Computer Science course.
                        Deciding it was too late to change majors, I continued on and graduated but joined Pursuit right after where I learn PERN stack.
                    I enjoy cooking, dancing and hiking! </p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}


export default About;