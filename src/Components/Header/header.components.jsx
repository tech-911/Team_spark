import React from "react";
import "./header.styles.scss";
import logo from "../../assets/Group 9.png";
import NavInput from "../Input/navInput.components";
import { Link } from "react-router-dom";
import language from "../../assets/language_24px.svg";
import Dropdown from "../Dropdown/dropdown.components";

function Header() {
  return (
    <div className="header">
    <Link to="/">
       <img id="img1" src={logo} alt="" />
    </Link>
     
      <NavInput />
      <div className="right-item">
        <Link id="link" to="/">
          Become a Host
        </Link>
        <img id="img2" src={language} alt="" />
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;
