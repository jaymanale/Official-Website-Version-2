import React from 'react';
import expImg from './../resources/svg/tcs.svg';

const TcsExperience = () => {
    return (
        <div className="row  pt-1 ">
            <div className="col-sm-12 col-md-6" style={{"textAlign": "center"}} >
            <h1 className="mt-1 font-weight-bold">@Tcs</h1>
                {/* <img
                    className="img-fluid p-5"
                    style={{"height" : "65%", "width" : "65%"}}
                    src={expImg}
                    alt="System Engineer Position"
                /> */}
            </div>
            <div className="col-sm-12 col-md-6 my-1">
                <h3>System Engineer <span className="font-weight-bold">@TCS</span></h3>

                <ul>
                    <li>
                        We have successfully completed the first version of DPM in 1 month and deliver the product to the customer. With this project,
                        we have completed Onboarding of GDPR at an organization level and saved 4% of annual income global turnover or 20
                        million Euro fine
                    </li>
                     <li>
                        I have used technology like AngularJs, Bootstrap for Front-End and
                        Java (Spring), PostgreSql at Back-End
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default TcsExperience;
