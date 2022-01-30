import React from 'react';
//import expImg from './../resources/svg/cognizant.svg';

const CognizantExperience = () => {
    return (
        <div className="row pt-1">
            <h1 className="mt-1 font-weight-bold">Experience</h1>
            {/* <div className="col-sm-12 col-md-6" style={{"textAlign": "center"}} >
            <h1 className="mt-1 font-weight-bold my-1">@Cognizant</h1>
                  <img
                    className="img-fluid p-5"
                    style={{"height" : "65%", "width" : "65%"}}
                    src={expImg}
                    alt="System Engineer Position"
                    
                />  
            </div> */}
            <div className="col-sm-12 col-md-12 mt-5">
                <h3>Full Stack Engineer <span className="font-weight-bold"> @Cognizant</span>  </h3>

                <ul>
                    <li>
                        Working Wireless network operator application using agile methodology. I was responsible for implementing User Story, Testing
                        and fixing bugs.
                    </li>
                    <li>
                        I have used technology like ReactJS, GraphQL, Reactive spring
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default CognizantExperience;
