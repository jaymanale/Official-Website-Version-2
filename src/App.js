import React from 'react';
import Main from './components/main';
import Experience from './components/experience';
import Skills from './components/skills';
import Education from './components/education';

import './App.css';

function App() {
  return (
    <div className="container">
      <Main />
      <Experience />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
