import React from 'react'

import {NavBar} from './components';
import {Header, Transition, Project, Resume, Contact} from './container';
import './App.css';

const App = () => (
    <div>
      <NavBar />
      <Header />
      <Transition />
      <Project />
      <Resume />
      <Contact />
    </div>
  );

export default App
