import React, { Component } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = {
    showNav: false,
  };

  // Function to toggle navbar visibility
  toggleNav = () => {
    this.setState({
      showNav: !this.state.showNav,
    });
  };

  render() {
    return (
      <nav className={this.state.showNav ? "show" : ""}>
        <ul className={this.state.showNav ? `show nav-links` : `nav-links`}>
          <li className="nav-link">
            <Link to="/consultation">Live Consultation</Link>
          </li>
          <li className="nav-link">
            <Link to="buy">Buy Plans</Link>
          </li>
          <li className="nav-link">
            <Link to="/plans">View Plans</Link>
          </li>
          <li className="nav-link">
            <button className="login-btn">
              <Link to="/login">Log In</Link>
            </button>
          </li>
        </ul>

        <div className="menu" onClick={this.toggleNav}>
          <i className="fa fa-bars" aria-hidden="true"></i> Menu
        </div>
      </nav>
    );
  }
}

export default Navbar;
