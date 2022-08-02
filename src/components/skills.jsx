import React from "react";
import skillsImg from "./../resources/animate/skills.svg";
import {
  getFrontEndSkillsData,
  getBackEndSkillsData,
} from "./../services/skillService";

const Skills = () => {
  let frontendSkils = getFrontEndSkillsData();
  let backendSkills = getBackEndSkillsData();
  return (
    <React.Fragment>
      <div className="container-fluid gradiantRed text-white">
        <div className="row  pt-5" id="skills">
          <div className="col-sm-12 col-md-6">
            <h1 className="mt-4 font-weight-bold">Skills</h1>
            <img
              loading="lazy"
              className="img-fluid"
              src={skillsImg}
              alt="Skills"
            />
          </div>

          <div className="col-sm-12 col-md-6 py-5">
            <h3 className="col-sm-12 col-md-12 my-4">Front End</h3>
            <div className="row m-auto">
              {frontendSkils.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
            <h3 className="col-sm-12 col-md-12 my-4">Backend End</h3>
            <div className="row m-auto">
              {backendSkills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const SkillCard = ({ icon, title }) => {
  return (
    <div className="col-4 col-sm-3 text-center">
      <i className={icon}></i>
      <p>{title}</p>
    </div>
  );
};

export default Skills;
