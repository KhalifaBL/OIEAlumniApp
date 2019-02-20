import React from "react";
import "./Navbar.css";
import logo from "../img/logo.png";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <img className="logo" src={logo} alt="ESU Logo" />

      <a className="navbar-brand Office" href="#">
        Office Of International Education
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav nav-elements">
          <li className="nav-item hello">
            <a className="nav-link ">Hello, Mark</a>
          </li>
          <li className="nav-item log-out">
            <a className="nav-link " href="#">
              Log Out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
