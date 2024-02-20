import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            DASH <i className="fab fa-type3"></i>
          </Link>
          <div className="menu-icon">
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links">
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links">
                SDK
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
