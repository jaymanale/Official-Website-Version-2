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
            @Cognizant
          </span>
        </h3>
        <h6 className="text-muted">BACK-END Java | Spring Boot</h6>

        <ul>
          <li>
            Improved
            <span className="mark font-weight-bold">Billing module</span>
            performance by <span className="mark font-weight-bold">30%</span> by
            implementing features with
            <span className="mark font-weight-bold">Reactive Model.</span>
          </li>
          <li>
            Improved
            <span className="mark font-weight-bold">Autopay Module</span>
            Feature which helps the Customerto make payment on a monthly cycle
            by <span className="mark font-weight-bold">50%</span> by adding
            <span className="mark font-weight-bold">
              Autopay and Paper Free Billing feature.
            </span>
          </li>
        </ul>
        <h6 className="text-muted">FRONT-END Javascript | React</h6>
        <ul>
          <li>
            <span className="mark font-weight-bold">
              Improved User experience
            </span>
            of the Billing and Autopay module by
            <span className="mark font-weight-bold">40%</span> by implementing
            the
            <span className="mark font-weight-bold">
              Module Design standard.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CognizantExperience;
