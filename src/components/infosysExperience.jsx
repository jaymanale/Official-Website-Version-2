import React from 'react';
import expImg from './../resources/svg/infosys.svg';

const InfosysExperience = () => {
    return (
        <div className="row  pt-1 ">
            
            <div className="col-sm-12 col-md-12 my-1">
                <h3>Senior Associate Consultant <span className="font-weight-bold">@Infosys</span></h3>

                <ul>
                    <li>
                        Work on banking application using agile methodology. I was responsible for implementing User Story as well as Testing and
                        fixing bugs.
                        It is a distributed and complex architecture system where code is distributed across more then 10 services
                    </li>
                    <li>
                        I have used technology like Java, SQL Developer.
                    </li>
                </ul>
            </div>
            {/* <div className="col-sm-12 col-md-6" style={{"textAlign": "center"}}>
            <h1 className="mt-1 font-weight-bold">@Infosys</h1>
                  <img
                    className="img-fluid p-5"
                    style={{"height" : "65%", "width" : "65%"}}
                    src={expImg}
                    alt="System Engineer Position"
                />  
            </div> */}
        </div>
    );
};

export default InfosysExperience;
