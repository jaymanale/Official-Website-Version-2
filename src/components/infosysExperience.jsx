import React from "react";

const InfosysExperience = () => {
  return (
    <div className="row  pt-1 text-white">
      <div className="col-sm-12 col-md-12 mt-3">
        <h3>
          Senior Associate Consultant{" "}
          <span className="font-weight-bold newOrangeDarkStyle">@Infosys</span>
        </h3>
        <h6 className="text-muted mt-4 mb-3">
          BACK-END Java | Spring Boot | SQL
        </h6>
        <ul>
          <li>
            Worked on
            <span className="font-weight-bold">
              {" "}
              Banking Application using agile methodology{" "}
            </span>
            . It is a
            <span className="font-weight-bold">
              {" "}
              distributed and complex architecture system{" "}
            </span>
            where code is distributed across more then
            <span className="font-weight-bold"> 10 </span>
            services.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfosysExperience;
