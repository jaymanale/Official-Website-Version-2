import React from 'react';
import skillsImg from './../resources/animate/skills.svg';

const Skills = () => {
  return (
    <React.Fragment>
      <div className="container-fluid gradiantRed text-white">
        <div className="row  pt-5" id="skills">
          <div className="col-sm-12 col-md-6">
            <h1 className="m-2 font-weight-bold">Skills</h1>
            <img className="img-fluid" src={skillsImg} alt="Skills" />
          </div>
          <div className="col-sm-12 col-md-6 py-5">
            <h3>Front End</h3>
            <div>front img goes here</div>
            <h3>Back End</h3>
            <div>back img goes here</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Skills;
