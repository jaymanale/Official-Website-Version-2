import React from 'react';
import getTechnicalProjectsData from './../services/technicalProjectService';
import './../styles/card.css';

const TechnicalProjects = () => {
  let projects = getTechnicalProjectsData();
  return (
    <React.Fragment>
      <div className="container-fluid" id="projects">
        <div className="row pt-5">
          <h1 className="my-2 col-sm-12 col-md-12">Tech Projects</h1>
          {projects.map((project) => {
            return (
              <div key={project.title} className="col-sm-12 col-md-5 m-auto ">
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const ProjectCard = (props) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-img-top gradiantRed">
        <p> </p>
      </div>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <div className="m-2">
          {props.techStack.map((stack) => {
            return (
              <i
                key={stack.iconClass}
                className={stack.iconClass}
                style={stack.iconColor}
              ></i>
            );
          })}
        </div>
        <div className="text-center">
          <a href={props.demoLink} alt="Demo Button">
            <button className="btn btn-primary mx-2">
              <i
                className="fas fa-globe-asia mx-2"
                style={{ color: '#ffffff' }}
              ></i>
              Demo
            </button>
          </a>
          <a href={props.githubLink} alt="Github Button">
            <button className="btn btn-dark text-white mx-2">
              <i
                className="fab fa-github mx-2"
                style={{ color: '#ffffff' }}
              ></i>
              Github
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProjects;
