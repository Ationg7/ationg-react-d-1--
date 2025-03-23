import React from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
          <img 
            src="https://cdn-icons-png.flaticon.com/128/4514/4514764.png" 
            alt="Company Logo" 
            className="brand-logo"
          />
          perlCorp
        </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link to="/Home" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/About" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
          <Link to="/Service" className="nav-link">Service</Link>
          </li>
          <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contact</Link>
          </li>
        </ul>
    
      </div>
    </div>
  </nav>
  );
};

export default NavigationBar;