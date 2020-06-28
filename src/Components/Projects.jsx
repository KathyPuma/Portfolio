import React, { useState, useEffect } from 'react'
import './Projects.css'
import Carry from './Projects/Carry.png'
import Greenlist from './Projects/Greenlist.png'
import holDing from './Projects/holDing.png'

function Projects() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        handleAllProjects()
    }, [])

    const handleAllProjects = () => {
        let displayProject =
            [
                { name: 'Carry', about: 'A delivery platform for luxury clothes in NYC', img: Carry, github: 'https://github.com/KathyPuma/Carry', deployed: 'https://pursuitcarry.herokuapp.com/' },
                { name: 'Greenlist', about: 'An registry that allows small designers and suppliers have a centralized source of finding materials.', img: Greenlist, github: 'https://github.com/KathyPuma/greenlist__FSWeb', deployed: 'https://github.com/' },
                // { name: 'MovieList', about: 'A board where people can add shows and comments on it.', github: 'https://github.com/', deployed: 'https://github.com/' },
                { name: 'holDing', about: 'A micro social media that allows user to join "holds". These holds are private with the purpose to create a safespace.', img: holDing, github: 'https://github.com/KathyPuma/holding__WebApp', deployed: 'https://github.com/' }
            ]
        setProjects(displayProject)
    }


    return (
        <div class="main">
            <ul class="cards">
                {projects.map(project => {
                    return (
                        <li class="cards_item">
                            <div class="card">
                                <div class="card_image"><img src={project.img} alt={project.name} /></div>
                                <div class="card_content">
                                    {/* <h2 class="card_title">TITLE</h2>
                                                <p class="card_text">INFO</p> */}
                                    <button class="btn card_btn" >
                                        <a
                                            target='_blank'
                                            href={project.deployed}
                                            className='website'
                                            rel='noopener noreferrer'
                                        >WEBSITE</a>
                                    </button>
                                    <button class="btn card_btn" >
                                        <a
                                            target='_blank'
                                            href={project.github}
                                            className='website'
                                            rel='noopener noreferrer'>
                                            Github</a>

                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })
                }
            </ul>

        </div>
    )
}

export default Projects;