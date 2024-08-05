import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { CodeIcon, HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <div className="icon-vans">
              <img src="shriji1.png" alt="" />
            </div>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/stay"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Stay
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/activities"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Activities
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/dining"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Dining
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                exact
                to="/wedding"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Wedding
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/gallery"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/membership"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Membership
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact-us"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="book-btn"
                href="https://wa.me/9479484887?text=Hi,%20I%20am%20interested%20in%20booking.%20Can%20we%20talk%20about%20it."
                target="_blank"
              >
                <strong>Book Now</strong>
              </a>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuOpen />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuClose />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
