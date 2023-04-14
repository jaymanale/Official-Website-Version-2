import React from "react";
import mainImg from "./../resources/animate/main.svg";
import ProfileImg from "./../resources/png/profile3.png";
import getSocialLinkData from "./../services/mainService";

const Main = () => {
  let links = getSocialLinkData();
  return (
    <div className="container-fluid gradiantRed">
      <div className="row text-center mt-5 " id="about">
        <div className="col-sm-12 col-md-6 mt-5 text-white">
          <img
            loading="lazy"
            className="img-fluid img-profile rounded-circle mx-auto m-4"
            src={ProfileImg}
            alt="Jayram profile"
            style={{ border: "1rem solid rgba(255, 255, 255, 0.2)" }}
          />
          <h1 className="font-weight-bold mt-3">Hi,</h1>
          <h2 className="font-weight-bold">I'm Jayram,</h2>
          <h2 className="font-weight-bold linear-wipe">Full-Stack Engineer</h2>
          <div className="social-icons mt-5">
            {links.map((link) => (
              <SocialCard key={link.icon} {...link} />
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <img
            loading="lazy"
            src={mainImg}
            className="img-fluid"
            alt="Main Section"
          />
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ name, link, icon, iconColor }) => {
  return (
    <a
      className="mx-3"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={iconColor}
      aria-label={name}
    >
      <i className={icon}></i>
    </a>
  );
};
export default Main;
