import React from "react";
import getTechnicalProjectsData from "./../services/technicalProjectService";
import "./../styles/card.css";

const TechnicalProjects = () => {
  let projects = getTechnicalProjectsData();
  return (
    <React.Fragment>
      <div className="container-fluid bg-light" id="projects">
        <div className="row pt-5">
          <h1 className="mt-4 col-sm-12 col-md-12 font-weight-bold textGradientColor">
            Tech Projects
          </h1>
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
        <img
          src={props.imageUrl}
          className="img-fluid cover p-3 rounded"
          alt="marvel"
        />
      </div>
      <div className="card-body">
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
        <h5 className="card-title font-weight-bold">{props.title}</h5>
        <h6 className="font-weight-normal text-muted">
          ( {props.technology} )
        </h6>
        <p className="card-text">{props.description}</p>

        <div className="text-center">
          <a href={props.demoLink} alt="Demo Button">
            <button className="btn btn-primary mx-2 font-weight-bold textGradientColorButton">
              <i
                className="fas fa-globe-asia mx-2"
                style={{ color: "#ffffff" }}
              ></i>
              See Live
            </button>
          </a>
          <a href={props.githubLink} alt="Github Button">
            <button className="btn btn-dark text-white mx-2 font-weight-bold textGradientColorBlackButton">
              <i
                className="fab fa-github mx-2"
                style={{ color: "#ffffff" }}
              ></i>
              Source Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProjects;
