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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3480.9132338037193!2d6.471985292531005!3d9.540324675168161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c7535757030a5%3A0x4852db91f6d13234!2sVatican%20City!5e1!3m2!1sen!2sng!4v1635489482483!5m2!1sen!2sng"
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
