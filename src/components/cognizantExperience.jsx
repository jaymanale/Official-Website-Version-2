import React from 'react';
import expImg from './../resources/png/cognizant.png';

const CognizantExperience = () => {
    return (
        <div className="row  pt-5 ">
            <div className="col-sm-12 col-md-6">
                <h1 className="mt-4 font-weight-bold">Experience</h1>
                <img
                    className="img-fluid"
                    src={expImg}
                    alt="System Engineer Position"
                />
            </div>
            <div className="col-sm-12 col-md-6 my-5">
                <h3>Full Stack Engineer</h3>

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
