import React, { useState } from "react";

import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
      <img src="src/img/logo.png"alt="Logo" className="logo" />      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/places">Best places</NavLink>
        </li>
        <li>
          <NavLink to="/planning">Planning</NavLink>
        </li>
        <li>
          <NavLink to="/transport">Transport</NavLink>
        </li>
        <li>
          <NavLink to="/explore">Explore our application</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
