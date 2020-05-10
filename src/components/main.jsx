import React from 'react';
import mainImg from './../resources/animate/main.svg';
import ProfileImg from './../resources/png/profile.jpg';
import getSocialLinkData from './../services/mainService';

const Main = () => {
  let links = getSocialLinkData();
  return (
    <div className="container-fluid gradiantRed">
      <div className="row text-center mt-5 " id="about">
        <div className="col-sm-12 col-md-6 mt-5 text-white">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={ProfileImg}
            alt="Jayram Photo"
            style={{ border: '1rem solid rgba(255, 255, 255, 0.2)' }}
          />
          <h1 className="font-weight-bold mt-3">Hi,</h1>
          <h2 className="font-weight-bold">I'm Jayram,</h2>
          <h2 className="font-weight-bold colorGradiant">
            Full-Stack Developer
          </h2>
          <div className="social-icons mt-5">
            {links.map((link) => (
              <SocialCard key={link.icon} {...link} />
            ))}
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <img src={mainImg} className="img-fluid" alt="Main Section" />
        </div>
      </div>
    </div>
  );
};

const SocialCard = ({ link, icon, iconColor }) => {
  return (
    <a className="mx-3" href={link} target="_blank" style={iconColor}>
      <i className={icon}></i>
    </a>
  );
};
export default Main;
