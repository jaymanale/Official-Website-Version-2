import React from "react";
import mainImg from "./../resources/Animate_V2/main.svg";
import ProfileImg from "./../resources/png/profile3.png";
import getSocialLinkData from "./../services/mainService";

const Main = () => {
  let links = getSocialLinkData();
  return (
    <div className="container-fluid backgroundColorGradient">
      <div className="row text-center mt-5 " id="about">
        <div className="col-sm-12 col-md-6 mt-5 text-white">
          <img
            loading="lazy"
            className="img-fluid rounded-circle mx-auto m-4 gradientLargeBorder"
            src={ProfileImg}
            alt="Jayram profile"
          />
          <h2 className="font-weight-bold mt-3">
            Hi,
            <span role="img" aria-label="Hand wave icon">
              👋
            </span>
          </h2>
          <h2 className="font-weight-bold">I'm Jayram,</h2>
          <h1 className="font-weight-bold linear-wipe">Full-Stack Engineer</h1>
          <div className="social-icons mt-4" aria-label="Social Icon Section">
            {links.map((link) => (
              <SocialCard key={link.icon} {...link} />
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-6 d-none d-md-block">
          <img
            loading="lazy"
            src={mainImg}
            className="img-fluid mt-5"
            alt="Main Section"
          />
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ name, link, icon, alt }) => {
  return (
    <a
      className="mx-3"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      role="button"
    >
      <img loading="lazy" src={icon} className="img-fluid" alt={alt} />
    </a>
  );
};
export default Main;
