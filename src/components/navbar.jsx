import React from "react";
import getNavbarLinkData from "./../services/navbarService";
import resume from "./../resources/resume/Resume.pdf";
const Navbar = () => {
  let navLinks = getNavbarLinkData();

  return (
    <div className="container-fluid">
      <nav
        className="  navbar navbar-expand-lg navbar-dark backgroundColorGradient fixed-top text-white"
        id="sideNav"
      >
        <a
          className="navbar-brand js-scroll-trigger"
          href="https://www.jayrammanale.com/"
        >
          <span className="d-block newOrangeDarkStyle">JM</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav navbar-nav">
            {navLinks.map((link) => (
              <NavLink key={link.navId} {...link} />
            ))}
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href={resume}>
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

const NavLink = ({ navId, title }) => {
  return (
    <li className="nav-item d-none d-lg-block">
      <a className="nav-link js-scroll-trigger " href={navId}>
        {title}
      </a>
    </li>
  );
};

export default Navbar;
