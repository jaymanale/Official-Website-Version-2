import React from 'react';
import mainImg from './../resources/svg/main.svg';

const Main = () => {
  return (
    <div className="row text-center">
      <div className="col-sm-12  col-md-6">
        <h2>Hi,</h2>
        <h2>I'm Jayram</h2>
      </div>
      <div className="col-sm-12 col-md-6">
        <img src={mainImg} className="img-fluid" alt="Main Section" />
      </div>
    </div>
  );
};

export default Main;
