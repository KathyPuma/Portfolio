import React, { useState, useEffect } from 'react'
import './Projects.css'
import Carry from './Projects/Carry.png'
import Greenlist from './Projects/Greenlist.jpg'
import RedditClone from './Projects/RedditClone.png'
import MovieMarathon from './Projects/MovieMarathon.png'
import themeStore from '../redux/store/themeStore'


function Projects() {
    const state = themeStore.getState();
    const [projects, setProjects] = useState([])

    useEffect(() => {
        handleAllProjects()
    }, [])

    const handleAllProjects = () => {
                let displayProject =
                    [
                        { name: 'RedditClone', about: 'A clone that mimics reddit.', img: RedditClone, github: 'https://github.com/KathyPuma/Reddit_clone', deployed: '' },
                        { name: 'Carry', about: 'A delivery platform for luxury clothes in NYC.', img: Carry, github: 'https://github.com/KathyPuma/Carry', deployed: 'https://pursuitcarry.herokuapp.com/' },
                        { name: 'MovieMarathon', about: 'A movie/show review hub that allows users to see what others are watching and recommending.', img: MovieMarathon, github: 'https://github.com/KathyPuma/MovieMarathon', deployed: 'https://moivemarathon.herokuapp.com/' },
                        { name: 'Greenlist', about: 'A registry that allows small designers and suppliers have a centralized source of finding materials.', img: Greenlist, github: 'https://github.com/KathyPuma/greenlist__FSWeb', deployed: 'https://greenlist-registry.herokuapp.com/main' },
                    ]
                setProjects(displayProject)
            }

    return (
        <div className="Projects-stage">
            <ul className="cards">
                {projects.map(project => {
                    return (
                        <li className="cards_item"  key={project.name}>
                            <div className="card">
                                <img src={project.img} alt="Avatar" className="project_image" />
                                <div className="overlay">
                                    <div className="card_text">{project.about}</div>

                                    <div className="card_content">
                                        <button className="card_btn" >
                                            <a
                                                target='_blank'
                                                href={project.deployed}
                                                className='website'
                                                rel='noopener noreferrer'
                                            >
                                                
                                                WEBSITE</a>
                                        </button>
                                        <button className="card_btn" >
                                            <a
                                                target='_blank'
                                                href={project.github}
                                                className='website'
                                                rel='noopener noreferrer'>
                                                Github</a>

                                        </button>
                                    </div>
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