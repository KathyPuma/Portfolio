import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Project from './Components/Projects'
import Skills from './Components/Skills'
import { connect } from 'react-redux';
import ToggleButton from './Components/ToggleButton'

import './App.css'

function App(props) {

  return (
    <div className={!props.mode ? "Light" : 'Dark'}>
      <Navbar />
      <ToggleButton mode={props.mode} className='toggle' />

      <Switch >
        <Route path="/projects" component={Project} />
        <Route path="/skills" component={Skills} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={About} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mode: state.state.mode
  };
}
export default withRouter(connect(mapStateToProps)(App));

