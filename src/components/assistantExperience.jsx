import React from 'react';
import expImg from './../resources/animate/experienceJr.svg';
const AssistantExperience = () => {
  return (
    <div className="row  py-5">
      <div className="col-sm-12 col-md-6">
        <h3>Assistant System Engineer</h3>
        <p>Project - Application portfolio Management</p>
        <ul>
          <li>
            APM is the project where all the application present in the TCS
            organization are managed. We have successfully completed the first
            version in 2 months and integrated all application in our
            application.
          </li>
          <li>
            While working on APM, we have adopted an Agile methodology which
            helps us to build the product in a much smaller amount of time.
          </li>
          <li>
            In Each Sprint, I was responsible for designing, implementing of
            User Story as well as Testing and fixing bugs or other coding issues
          </li>
          <li>
            I have used technology like AngularJs, Bootstrap for Front-End and
            Java (Spring), PostgreSql at Back-End
          </li>
        </ul>
      </div>
      <div className=".d-md-block .d-lg-block col-md-6">
        <img
          className="img-fluid  "
          src={expImg}
          alt="Assistant System Engineer Position"
        />
      </div>
    </div>
  );
};

export default AssistantExperience;
