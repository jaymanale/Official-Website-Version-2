import React from 'react';
import info from './../resources/info.svg';

const Main = () => {
  return (
    <div className="row text-center">
      <div className="col-sm-10  col-md-6">
        <h2>Hi,</h2>
        <h2>I'm Jayram</h2>
      </div>
      <div className="col-sm-10col-md-6">{info}</div>
    </div>
  );
};

export default Main;
