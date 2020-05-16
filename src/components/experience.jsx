import React from 'react';
import AssistantExperience from './assistantExperience';
import SystemEngineerExperience from './systemEngineerExperience';
const Experience = () => {
  return (
    <div className="container-fluid bg-light " id="experience">
      <SystemEngineerExperience />
      <AssistantExperience />
    </div>
  );
};

export default Experience;
