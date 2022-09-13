import React from "react";

const TcsExperience = () => {
  return (
    <div className="row  pt-1 ">
      <div className="col-sm-12 col-md-12 mt-3">
        <h3>
          System Engineer{" "}
          <span className="font-weight-bold textGradientColorButton">@TCS</span>
        </h3>
        <h6 className="text-muted mt-4 mb-3">
          BACK-END Java | Spring Boot | PostgreSQL
        </h6>
        <ul>
          <li>
            <span className="mark"> Completed GDPR on-boarding </span>
            at an organization level which
            <span className="mark"> saved 4% </span> of global turnover or
            <span className="mark"> 20 million </span> Euro fine by
            <span className="mark">
              {" "}
              implementing Data Privacy Application.{" "}
            </span>
          </li>
          <li>
            Increased
            <span className="mark"> on-boarding of applications </span>
            within an organization for GDPR by
            <span className="mark"> 60% </span>
            by implementing the
            <span className="mark">
              {" "}
              Data Protection Impact Assessment(DPIA){" "}
            </span>
            feature in the Data Privacy Application.
          </li>
        </ul>
        <h6 className="text-muted mt-2 mb-3">FRONT-END Javascript | Angular</h6>
        <ul>
          <li>
            Implemented easy to use
            <span className="mark"> Data Attribute Model </span>
            feature in DPA which improve the user experience by
            <span className="mark"> 70% </span> by using
            <span className="mark"> D3.js (Data-Driven Documents) </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TcsExperience;
