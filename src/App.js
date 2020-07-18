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
    <div className={!props.darkMode ? "Light" : 'Dark'}>
      <ToggleButton darkMode={props.darkMode} className='toggle' />

      <Navbar />
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
    darkMode: state.theme.darkMode
  };
}
export default withRouter(connect(mapStateToProps)(App));

