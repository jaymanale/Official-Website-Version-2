import React from "react";
import getTechnicalProjectsData from "./../services/technicalProjectService";
import "./../styles/card.css";

const TechnicalProjects = () => {
  let projects = getTechnicalProjectsData();
  return (
    <React.Fragment>
      <div className="container-fluid darkBackground" id="projects">
        <div className="row pt-5">
          <h1 className="mt-4 col-sm-12 col-md-12 font-weight-bold">
            <span className="newOrangeDarkStyle">Tech Projects</span>
            <span role="img" aria-label="Technical projects icon">
              &nbsp;👨‍💻
            </span>
          </h1>
          {projects.map((project) => {
            return (
              <div key={project.title} className="col-sm-12 col-md-8 m-auto ">
                <ProjectCard {...project} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

const ProjectCard = ({
  imageUrl,
  techStack,
  title,
  technology,
  description,
  demoLink,
  githubLink,
}) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-img-top backgroundColorGradient">
        <img
          src={imageUrl}
          className="img-fluid cover p-3 rounded"
          alt="marvel"
        />
      </div>
      <div className="card-body">
        <div className="m-2">
          <img
            loading="lazy"
            src={techStack}
            className="img-fluid skill-icon-size"
            alt={techStack}
          />
        </div>
        <h4 className="card-title font-weight-bold">{title}</h4>
        <h6 className="font-weight-normal text-muted">( {technology} )</h6>
        <p className="card-text">{description}</p>

        <div className="text-center">
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            alt="Demo Button"
          >
            <button className="btn btn-danger mx-2 font-weight-bold textGradientColorButton">
              <span role="img" aria-label="Globe icon">
                🌐
              </span>

              <span className="ml-2">See Live</span>
            </button>
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            alt="Github Button"
          >
            <button className="btn btn-dark text-white mx-2 font-weight-bold ">
              <span role="img" aria-label="Globe icon">
                👉
              </span>

              <span className="ml-2">Source Code</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TechnicalProjects;
