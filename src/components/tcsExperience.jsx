import React from 'react';
import expImg from './../resources/png/tcs.png';

const TcsExperience = () => {
    return (
        <div className="row  pt-5 ">
            <div className="col-sm-12 col-md-6">
               
                <img
                    className="img-fluid"
                    src={expImg}
                    alt="System Engineer Position"
                />
            </div>
            <div className="col-sm-12 col-md-6 my-5">
                <h3>System Engineer</h3>

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
