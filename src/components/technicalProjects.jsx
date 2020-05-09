import React from 'react';
import getTechnicalProjectsData from './../services/technicalProjectService';
import './../styles/card.css';

const TechnicalProjects = () => {
  let projects = getTechnicalProjectsData();
  return (
    <React.Fragment>
      <h1 className="m-2">Technial Projects</h1>
      <div className="row">
        {projects.map((project) => {
          return (
            <div key={project.title} className="col-sm-12 col-md-4">
              <ProjectCard {...project} />
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

const ProjectCard = (props) => {
  return (
    <div className="card text-center cardStyle m-1">
      <div className="card-img-top bg-primary">
        <p> </p>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
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
          <button className="btn btn-primary mx-2">
            <a href={props.demoLink}>
              <i
                className="fas fa-globe-asia mx-2"
                style={{ color: '#ffffff' }}
              ></i>
            </a>
            Demo
          </button>
          <button className="btn btn-dark text-white mx-2">
            <a href={props.githubLink}>
              <i
                className="fab fa-github mx-2"
                style={{ color: '#ffffff' }}
              ></i>
            </a>
            Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProjects;
