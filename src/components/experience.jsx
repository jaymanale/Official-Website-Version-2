import React from "react";

import CognizantExperience from "./cognizantExperience";
import InfosysExperience from "./infosysExperience";
import TcsExperience from "./tcsExperience";

const Experience = () => {
  return (
    <div className="container-fluid bg-light " id="experience">
      <CognizantExperience />
      <InfosysExperience />
      <TcsExperience />
    </div>
  );
};

export default Experience;
