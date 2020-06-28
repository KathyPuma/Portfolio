import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faJs, faNode, faHtml5 } from '@fortawesome/free-brands-svg-icons';
import './Skills.css'

function Skills() {
    return (
        <div className='Skills-stage'>
            <div className='Skills-container'>


                <div className='Skills-icons'>
                    <div class='react-log-div'>
                        <FontAwesomeIcon
                            className='react-logo'
                            icon={faReact} />
                        {/* React logo color:sky blue*/}
                        <p>React</p>
                    </div>

                    <div class='js-div'>
                        <FontAwesomeIcon
                            className='js-logo'
                            icon={faJs} />
                        <p>Javascript</p>
                    </div>

                    <div class='node-div'>
                        <FontAwesomeIcon
                            className='node-logo'
                            icon={faNode} />
                        <p>Node</p>
                    </div>

                    <div class='html-div'>
                        <FontAwesomeIcon
                            className='html-logo'
                            icon={faHtml5} />
                        <p>HTML</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Skills;