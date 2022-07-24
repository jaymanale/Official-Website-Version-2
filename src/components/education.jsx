import React from "react";
import educationImg from "./../resources/animate/education.svg";
const Education = () => {
  return (
    <React.Fragment>
      <div className="container-fluid bg-light">
        <div className="row  pt-5" id="education">
          <div className="col-sm-12 col-md-6">
            <h1 className="mt-4 font-weight-bold textGradientColor">
              Education
            </h1>
            <img src={educationImg} className="img-fluid" alt="Education" />
          </div>
          <div className="col-sm-12 col-md-6 py-5">
            <div className="py-3">
              <h3>Engineering</h3>
              Savitribai Phule Pune University
              <span className="float-right">June 2013 - May 2016</span>
              <p className="small">
                Percentage :{" "}
                <span className="font-weight-bold">
                  70.53% ( FIRST CLASS DIST )
                </span>
              </p>
            </div>

            <div className="py-3">
              <h3>Diploma</h3>
              Maharashtra State Board of Technical Education
              <span className="float-right">June 2010 - May 2013</span>
              <p className="small">
                Percentage :{" "}
                <span className="font-weight-bold">
                  77.87% ( FIRST CLASS DIST )
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
