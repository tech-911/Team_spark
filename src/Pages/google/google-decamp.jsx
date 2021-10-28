import React from "react";
import Header from "../../Components/Header/header.components";
import "./google-decamp.styles.scss";

function GoogleThird() {
  return (
    <div className="">
      <Header />
      <div className="frame-third">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.6388121479104!2d6.470787014790492!3d9.540074893167388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c7558d421e89f%3A0xb4ddf57d8860ea79!2sULTIMATE%20Lodge!5e0!3m2!1sen!2sng!4v1635451456346!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
          title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleThird;


