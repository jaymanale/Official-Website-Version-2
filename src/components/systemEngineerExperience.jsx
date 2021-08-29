import React from 'react';
import expImg from './../resources/animate/experienceSr.svg';

const SystemEngineerExperience = () => {
  return (
    <div className="row  pt-5 ">
      <div className="col-sm-12 col-md-6">
        <h1 className="mt-4 font-weight-bold">Experience</h1>
        <img
          className="img-fluid"
          src={expImg}
          alt="System Engineer Position"
        />
      </div>
      <div className="col-sm-12 col-md-6 my-5">
        <h3>System Engineer @TCS</h3>
        <p>Project - Data Privacy Management</p>
        <ul>
          <li>
            We have successfully completed the first version in 1 month and
            deliver the product to the customer. With this project, we have
            completed Onboarding of GDPR at an organization level.
          </li>
          <li>
            Working with 13 people team we have adopted the Agile Methodology
            which helps to deliver the feature to the customer in a short time
            and get constant feedback from the customer which result in a
            much-improved product.
          </li>
          <li>
            In Each Sprint, I was responsible for designing, implementing of
            User Story as well as Testing and fixing bugs or other coding
            issues.
          </li>
          <li>
            I have used technology like AngularJs, Bootstrap for Front-End and
            Java (Spring), PostgreSql at Back-End
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SystemEngineerExperience;
