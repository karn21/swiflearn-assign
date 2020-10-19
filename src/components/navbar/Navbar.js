import React, { Component } from "react";
import "./navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className="nav-links">
          <li className="nav-link">
            <a href="#">Live Consultation</a>
          </li>
          <li className="nav-link">
            <a href="#">Buy Plans</a>
          </li>
          <li className="nav-link">
            <a href="#">View Plans</a>
          </li>
          <li className="nav-link">
            <button className="login-btn">Log In</button>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
