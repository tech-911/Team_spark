import React from "react";
import "./header.styles.scss";
import logo from "../../assets/Group 9.png";
function Header() {
  return (
    <div className="header">
      <div className="header-container">
      <img src={logo} alt=""/>
        <h1>
        Hello world
        </h1>
      </div>
    </div>
  );
}

export default Header;
