import React from "react";
import "./navInput.styles.scss";
import logo from "../../assets/Group 3.png";
function Input() {
  return (
    <div className="nav-input">
      <form className="nav-form">
        <input placeholder="Start your search" />

        <img src={logo} alt="" />
      </form>
    </div>
  );
}

export default Input;
