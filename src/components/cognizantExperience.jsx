import React from "react";

const CognizantExperience = () => {
  return (
    <div className="row pt-1 text-white">
      <h1 className="mt-1 font-weight-bold ml-3 ">
        <span className="newOrangeDarkStyle">Experience</span>
        <span role="img" aria-label="Laptop icon">
          &nbsp;💻
        </span>
      </h1>

      <div className="col-sm-12 col-md-12 mt-3">
        <h3>
          Full Stack Engineer{" "}
          <span className="font-weight-bold newOrangeDarkStyle">
            @Cognizant
          </span>
        </h3>
        <h6 className="text-muted mt-4 mb-3">BACK-END Java | Spring Boot</h6>

        <ul>
          <li>
            Improved
            <span className="font-weight-bold"> Billing module </span>
            performance by <span className="font-weight-bold"> 30% </span> by
            implementing features with
            <span className="font-weight-bold"> Reactive Model. </span>
          </li>
          <li>
            Improved
            <span className="font-weight-bold"> Autopay Module </span>
            Feature which helps the Customer to make payment on a monthly cycle
            by <span className="font-weight-bold"> 50% </span> by adding
            <span className="font-weight-bold">
              {" "}
              Autopay and Paper Free Billing feature.{" "}
            </span>
          </li>
        </ul>
        <h6 className="text-muted mt-2 mb-3">FRONT-END Javascript | React</h6>
        <ul>
          <li>
            <span className="font-weight-bold"> Improved User experience </span>
            of the Billing and Autopay module by
            <span className="font-weight-bold"> 40% </span> by implementing the
            <span className="font-weight-bold"> Module Design standard. </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CognizantExperience;
