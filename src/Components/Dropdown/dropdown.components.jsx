import React from "react";
import "./dropdown.styles.scss";
import hamburger from "../../assets/hamburger.svg";
import avatar from "../../assets/avatar.svg";

function Dropdown() {
  return (
    <button className="dropdown">
      <img id="img1" src={hamburger} alt="" />
      <img id="img2" src={avatar} alt="" />
    </button>
  );
}

export default Dropdown;
