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

        <ul>
          <li>
            Develop features using the Reactive Model with Java and Springboot
            to
            <span className="font-weight-bold">
              enhance the billing module's performance by 15%.
            </span>
          </li>
          <li>
            <span className="font-weight-bold">Enhance the Autopay</span>{" "}
            feature to facilitate monthly payments for customers, achieving a{" "}
            <span className="font-weight-bold">20% increase in usage</span>{" "}
            through the addition of Autopay and Paper-Free Billing
            functionalities.
          </li>
          <li>
            <span className="font-weight-bold">
              Utilize React.js to enhance the user experience
            </span>{" "}
            in the Billing and Autopay modules, resulting in a{" "}
            <span className="font-weight-bold">20% improvement </span> in user
            satisfaction.
          </li>
          <li>
            <span className="font-weight-bold">
              Optimized Continuous Integration/Deployment Pipeline{" "}
            </span>{" "}
            processes, including pull requests, code reviews, testing, and
            unit/e2e testing to
            <span className="font-weight-bold">
              streamline development workflows.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CognizantExperience;
