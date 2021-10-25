import React from "react";
import "./dropdown.styles.scss";
import hamburger from "../../assets/hamburger.svg";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
function Dropdown() {
  return (
    <Link to="/signup">
      <button className="dropdown">
        <img id="img1" src={hamburger} alt="" />
        <img id="img2" src={avatar} alt="" />
      </button>
    </Link>
  );
}

export default Dropdown;
