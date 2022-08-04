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
            <img
              loading="lazy"
              src={educationImg}
              className="img-fluid"
              alt="Education"
            />
          </div>
          <div className="col-sm-12 col-md-6 py-5">
            <div className="py-3">
              <h3>Engineering</h3>
              <p className="small font-weight-bold">
                Savitribai Phule Pune University
              </p>
              <p className="small">June 2013 - May 2016</p>
              <p className="small">
                Percentage :
                <span className="font-weight-bold">
                  &nbsp;70.53% ( FIRST CLASS DIST )
                </span>
              </p>
            </div>

            <div className="py-3">
              <h3>Diploma</h3>
              <p className="small font-weight-bold">
                Maharashtra State Board of Technical Education
              </p>
              <p className="small">June 2010 - May 2013</p>
              <p className="small">
                Percentage :
                <span className="font-weight-bold">
                  &nbsp;77.87% ( FIRST CLASS DIST )
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
