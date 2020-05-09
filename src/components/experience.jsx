import React from 'react';
import AssistantExperience from './assistantExperience';
import SystemEngineerExperience from './systemEngineerExperience';
const Experience = () => {
  return (
    <React.Fragment>
      <h1>Experience</h1>
      <SystemEngineerExperience />
      <AssistantExperience />
    </React.Fragment>
  );
};

export default Experience;
