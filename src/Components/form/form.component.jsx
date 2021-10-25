import React from "react";
import "./form.styles.scss";
import leftLogo from "../../assets/left-logo.svg"
import googleIcon from "../../assets/google.svg"
import { Link } from "react-router-dom";
function form() {
  return (
    <div className="form-container">
      <div className="left">
        <div class="left-top">
          <h1><Link id="link" to="/">HOME</Link></h1>
        </div>
        <div class="left-logo">
          <img src={leftLogo} alt="" />
        </div>
        <h1>WELCOME TO DMGSL</h1>
        <div class="left-view-buttom">
          <img src={googleIcon} alt="" />
          <p>Sign in with Google</p>
        </div>
      </div>
      <div className="right">
        <div class="right-view-top">
          <p>Don't have an account?</p>
          <button>Log in</button>
        </div>
        <div class="title">
          <h1>Create your free account</h1>
        </div>
        <form action="">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" />
          <label for="email">Email</label>
          <input type="email" name="email" id="email" />
          <label for="password">Password</label>
          <input type="password" name="password" id="password" />
          <label for="confirm password">Confirm password</label>
          <input
            type="password"
            name="confirm password"
            id="confirm password"
          />
          <button type="submit">Create your account</button>
        </form>
      </div>
    </div>
  );
}

export default form;
