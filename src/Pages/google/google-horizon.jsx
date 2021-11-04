import React from "react";
import Header from "../../Components/Header/header.components";
import "./google-horizon.scss";

function GoogleSeventh() {
  return (
    <div className="">
      <Header />
      <div className="frame-second">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.7729610328797!2d6.4637223505994275!3d9.528444393141962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c754c9a5e9697%3A0xa7fbe8786a682ce2!2sHorizon%20Lodge!5e0!3m2!1sen!2sng!4v1636031397926!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
          title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default GoogleSeventh;
