import React from "react";

import Navbar from "./components/navbar";
import Main from "./components/main";
import Experience from "./components/experience";
import Skills from "./components/skills";
import TechnicalProjects from "./components/technicalProjects";
import Certificates from "./components/certificates";

import "./App.css";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Experience />
      <Skills />
      <TechnicalProjects />
      <Certificates />
    </React.Fragment>
  );
}

export default App;
