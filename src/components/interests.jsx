import React from "react";
import interestsImg from "./../resources/animate/interests.svg";

const Interests = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row  pt-5" id="interests">
          <div className="col-sm-12 col-md-6">
            <h1 className="mt-4 font-weight-bold textGradientColor">
              Interests
            </h1>
            <img
              loading="lazy"
              className="img-fluid"
              src={interestsImg}
              alt="Interests"
            />
          </div>
          <div className="col-sm-12 col-md-6 py-5">
            <ul>
              <li>
                Apart from being a web developer, I also enjoy solving problem
                from HackerRank and Leetcode. When I'm tired of coding, I love
                to play tabla (Musical Instrument :)
              </li>
              <li>
                When forced indoors, I follow a number of Action and comedy
                genre movies and television shows, I spend a large amount of my
                free time exploring the latest technology advancements in the
                web development world.
              </li>
              <li>Love to Travel and Exercise (GYM)</li>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Interests;
