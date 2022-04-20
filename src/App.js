import React from 'react'
import gsap from 'gsap'

import {NavBar} from './components';
import {Header, Transition, Project, Resume, Contact} from './container';
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div >
        <NavBar />
        <Header />
        <Transition />
        <Project />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App
