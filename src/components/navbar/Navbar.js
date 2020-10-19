import React, { Component } from "react";
import "./navbar.css";

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
          <li className="nav-link">Live Consultation</li>
          <li className="nav-link">Buy Plans</li>
          <li className="nav-link">View Plans</li>
          <li className="nav-link">
            <button className="login-btn">Log In</button>
          </li>
        </ul>

        <div className="menu" onClick={this.toggleNav}>
          <i class="fa fa-bars" aria-hidden="true"></i> Menu
        </div>
      </nav>
    );
  }
}

export default Navbar;
