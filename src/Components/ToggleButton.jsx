import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { CHANGE_MODE } from '../redux/actions/toggleAction'
import './ToggleButton.css'


const ToggleButton = ({ CHANGE_MODE, toggleChecked }) => {

    return (
        <div className='buttonsContainer' >
            <div>
                <div className='buttons' >
                    <label className="switch">
                        <input type="checkbox"
                            onChange={CHANGE_MODE}
                            checked={toggleChecked}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
};
export default withRouter(connect(null, { CHANGE_MODE })(ToggleButton))



