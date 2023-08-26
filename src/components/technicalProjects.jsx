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
          {projects.map((project, index) => {
            let imageStyle =
              "col-sm-12 col-md-5 col-lg-5  my-auto text-center ";
            imageStyle += index % 2 == 0 ? "order-md-2 order-lg-2" : "";
            let contentStyle =
              "col-sm-12 col-md-5 col-lg-5  my-auto text-center ";
            contentStyle += index % 2 == 0 ? "order-md-1 order-lg-1" : "";

            return (
              <div
                className="row offset-md-1 offset-lg-1 my-4 text-white"
                key={project.title}
              >
                <div className={imageStyle}>
                  <img
                    src={project.imageUrl}
                    className="img-fluid cover p-3 rounded"
                    alt="marvel"
                  />
                </div>
                <div className={contentStyle}>
                  <div className="card-body">
                    <div className="m-2">
                      <img
                        loading="lazy"
                        src={project.techStack}
                        className="img-fluid skill-icon-size"
                        alt={project.techStack}
                      />
                    </div>
                    <h4 className="display-5 card-title font-weight-bold">
                      {project.title}
                    </h4>
                    <h6 className="font-weight-normal text-muted">
                      ( {project.technology} )
                    </h6>
                    <p className="card-text">{project.description}</p>

                    <div className="text-center">
                      <a
                        href={project.demoLink}
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
                        href={project.githubLink}
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
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TechnicalProjects;
