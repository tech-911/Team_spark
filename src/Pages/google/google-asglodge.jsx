import React from "react";
import Header from "../../Components/Header/header.components";
import "./google-asglodge.styles.scss";

function GoogleFifth() {
  return (
    <div className="">
      <Header />
      <div className="frame-second">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.7563589369843!2d6.46802275048294!3d9.529884531584328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c759aa48f6e77%3A0x3b31c7093d0d202c!2sASG%20LODGE!5e0!3m2!1sen!2sng!4v1636031263676!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
          title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleFifth;
