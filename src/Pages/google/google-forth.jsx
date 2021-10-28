import React from "react";
import Header from "../../Components/Header/header.components";
import "./googel-forth.scss";

function GoogleForth() {
  return (
    <div className="">
      <Header />
      <div className="frame-forth">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.644809140347!2d6.470821790986783!3d9.539555263212275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zOcKwMzInMjQuOSJOIDbCsDI4JzIwLjEiRQ!5e0!3m2!1sen!2sng!4v1635451563515!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
          title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleForth;
