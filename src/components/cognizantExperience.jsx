import React from "react";

const CognizantExperience = () => {
  return (
    <div className="row pt-1">
      <h1 className="mt-1 font-weight-bold textGradientColor ml-3">
        Experience
      </h1>

      <div className="col-sm-12 col-md-12 mt-5">
        <h3>
          Full Stack Engineer
          <span className="font-weight-bold textGradientColorButton">
            {" "}
            @Cognizant
          </span>
        </h3>

        <ul>
          <li>
            Working Wireless network operator application using agile
            methodology. I was
            <span className="mark font-weight-bold">
              responsible for implementing User Story, Testing and fixing bugs.
            </span>
          </li>
          <li>
            I have used technology like
            <span className="mark font-weight-bold">
              ReactJS, GraphQL, Reactive spring.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CognizantExperience;
