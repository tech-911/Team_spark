import React from "react";
import Header from "../../Components/Header/header.components";
import "./google-salvation.scss";

function GoogleSixth() {
  return (
    <div className="">
      <Header />
      <div className="frame-second">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.8038278945405!2d6.462902750599434!3d9.525766293143766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c75c614636371%3A0xd578bb3534235485!2sSalvation%20lodge!5e0!3m2!1sen!2sng!4v1636031461134!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
          title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleSixth;
