import React from 'react';
import educationImg from './../resources/svg/education.svg';
const Education = () => {
  return (
    <React.Fragment>
      <div className="row  py-4">
        <div className="col-sm-12 col-md-6">
          <h1>Education</h1>
          <img src={educationImg} className="img-fluid" alt="Education" />
        </div>
        <div className="col-sm-12 col-md-6 py-5">
          <h3>Engineering</h3>
          <div>engineering description</div>
          <h3>Diploma</h3>
          <div>diploma description</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Education;
