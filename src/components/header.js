import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <React.Fragment>
    <div className="header">
      <div>
        <h1 className="logo">Math Magicians</h1>
      </div>
      <div className="menu">
        <NavLink to="/" className="menu-link">
          Home
        </NavLink>
        <span className="menu-link">&#124;</span>
        <NavLink to="/calculator" className="menu-link">
          Calculator
        </NavLink>
        <span className="menu-link">&#124;</span>
        <NavLink to="/quote" className="menu-link">
          Quote
        </NavLink>
      </div>
    </div>
  </React.Fragment>
);

export default Header;
