import React from 'react';

import Navbar from './components/navbar';
import Main from './components/main';
import Experience from './components/experience';
import Skills from './components/skills';
import Education from './components/education';
import Interests from './components/interests';
import OnlineContribution from './components/onlineContribution';
import TechnicalProjects from './components/technicalProjects';
import Certificates from './components/certificates';

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
      <TechnicalProjects />
      <OnlineContribution />
      <Certificates />

      <div className="text-center colorGradiant text-white">
        Made with <i className="fas fa-heart "></i> in India - version 2.0
      </div>
    </React.Fragment>
  );
}

export default App;
