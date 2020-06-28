import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CHANGE_MODE } from '../redux/actions/toggleAction'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './ToggleButton.css'


const ToggleButton = (props) => {
    let { CHANGE_MODE } = props;

    return (
        <div className='buttonsContainer' >
            <div>
                <div className='buttons' >

                    {/* <FontAwesomeIcon
                        icon={faSun} /> */}

                    {/* <span >
                        {mode ? "Day Mode" : "Night Mode"}
                    </span> */}




                    <label className="switch">
                        <input type="checkbox" onClick={CHANGE_MODE} />
                        <span className="slider round"></span>
                    </label>

                </div>

            </div>



        </div>
    )
};
export default withRouter(connect(null, { CHANGE_MODE })(ToggleButton))



