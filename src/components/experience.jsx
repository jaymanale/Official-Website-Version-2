import React from 'react';
import AssistantExperience from './assistantExperience';
import SystemEngineerExperience from './systemEngineerExperience';

import CognizantExperience from './cognizantExperience';
import InfosysExperience from './infosysExperience';
import TcsExperience from './tcsExperience';

const Experience = () => {
  return (
    <div className="container-fluid bg-light " id="experience">
      {/* <SystemEngineerExperience />
      <AssistantExperience /> */}

      <CognizantExperience />
      <InfosysExperience />
      <TcsExperience />
    </div>
  );
};

export default Experience;
