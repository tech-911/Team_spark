
import React from "react";
import Header from "../../Components/Header/header.components";
import "./google.styles.scss";

function Google() {
  return (
    <div className="">
      <Header />
      <div className="frame">
        <iframe
          height="800"
          width="1500"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.678340768768!2d6.465999615275362!3d9.536649283455867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c756b7fe9541f%3A0xa6ccf172182e0c42!2sDe&#39;manuels%20lodge!5e0!3m2!1sen!2sng!4v1635285943636!5m2!1sen!2sng"
          className="googlestyle"
          allowfullscreen=""
          loading="lazy"
         title="google"
        ></iframe>
      </div>
    </div>
  );
}

export default Google;






