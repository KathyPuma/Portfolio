import React from 'react';
import { Switch, Route } from 'react-router-dom'
import About from './Components/About'
import Navbar from './Components/Navbar'
import Contact from './Components/Contact'
import Project from './Components/Projects'
import Skills from './Components/Skills'
import './App.css'

function App() {
  
  return (
    <div>
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

export default App;