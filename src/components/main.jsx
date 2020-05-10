import React from 'react';
import mainImg from './../resources/animate/main.svg';

const Main = () => {
  return (
    <div className="container-fluid gradiantRed">
      <div className="row text-center mt-5 " id="about">
        <div className="col-sm-12  col-md-6 my-auto text-white">
          <h1 className="font-weight-bold ">Hi,</h1>
          <h2 className="font-weight-bold">I'm Jayram,</h2>
          <h2 className="font-weight-bold">Full-Stack Developer</h2>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={mainImg} className="img-fluid" alt="Main Section" />
        </div>
      </div>
    </div>
  );
};

export default Main;
