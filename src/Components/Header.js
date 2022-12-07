import React, { useState } from "react";
import "../Styles/Header.scss";
import { NavLink } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  const [active, setActive] = useState("navMenu");
  const [toggleIcon, setToggleIcon] = useState("navToggler");
  const navToggle = () => {
    active === "navMenu"
      ? setActive("navMenu navActive")
      : setActive("navMenu");

    // Toggler Icon

    toggleIcon === "navToggler"
      ? setToggleIcon("navToggler toggle")
      : setToggleIcon("navToggler");
  };
  return (
    <>
      <header>
        <nav className="nav">
          <a href="'#'" className="logo">
            Blue Corona
          </a>
          <ul className={active}>
            <li className="navItem">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="about">About</NavLink>
            </li>
            <li className="navItem">
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li className="navItem">
              <div class="dropdown">
                {/* <button class="dropbtn">Employess</button> */}
                <a className="">Employee</a>
                <div class="dropdownContent">
                  <a href="/employee"> Card View</a>
                  <a href="/employeetable"> Table View</a>
                </div>
              </div>
            </li>
          </ul>
          <div onClick={navToggle} className={toggleIcon}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
