import React from 'react';

import Navbar from './components/navbar';
import Main from './components/main';
import Experience from './components/experience';
import Skills from './components/skills';
import Education from './components/education';
import Interests from './components/interests';
import OnlineContribution from './components/onlineContribution';
import TechnicalProjects from './components/technicalProjects';
import Certificates from './components/certificates.jsx';

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Experience />
      <Skills />
      <Education />
      <Interests />
      <OnlineContribution />
      <TechnicalProjects />
      * <Certificates />
    </React.Fragment>
  );
}

export default App;
