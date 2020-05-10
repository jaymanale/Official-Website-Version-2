import React from 'react';

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav
        className="  navbar navbar-expand-lg navbar-dark gradiantRed fixed-top text-white"
        id="sideNav"
      >
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Jayram Manale</span>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience">
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">
                Education
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#interests">
                Interests
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#Contribution">
                Contribution
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#projects">
                Tech Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#certificates">
                Certificates
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link js-scroll-trigger"
                href="./../resources/resume/resume.PDF"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
