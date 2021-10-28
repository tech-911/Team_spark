import React from "react";
import Header from "../../Components/Header/header.components";
import "./google-greenlodge.styles.scss";

function GoogleSecond() {
  return (
    <div className="">
      <Header />
      <div className="frame-second">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.8152130723975!2d6.432173414790408!3d9.524778293177988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c750bffffffff%3A0x5e54a99887e9f479!2sGreen%20Lodge!5e0!3m2!1sen!2sng!4v1635448824084!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
          title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleSecond;
