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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5014.95044065345!2d6.470906790998274!3d9.539079251682026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104c7516ca0d8725%3A0xdb42b7b93aa4318!2sNasruj%20Lodge!5e0!3m2!1sen!2sng!4v1635488902089!5m2!1sen!2sng"
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
