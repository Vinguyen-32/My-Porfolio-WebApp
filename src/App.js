import React from 'react'

import {NavBar, ScrollAnimation} from './components';
import {Header, Transition, Project, Resume, Contact} from './container';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, true);
  }

  render(){
    return (
      <div >
        <NavBar />
        <Header />
        <ScrollAnimation />
        <Transition />
        <Project />
        <Resume />
        <Contact />
      </div>
    );
  }
}

export default App
