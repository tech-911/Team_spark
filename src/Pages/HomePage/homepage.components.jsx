import React from "react";
import "./homepage.styles.scss";
import SearchOptions from "../../Components/SearchOptions/searchOptions.components";
import btn from "../../assets/View Catalogue.png";
import LiveView from "../../Components/live-anywhere-component/live-anywhere.view";
import TryHosting from "../../Components/tryhosting/tryhosting.components";
import Discover from "../../Components/Discover/discover";
import IconsFacebook from "../../assets/icons/facebook.png";
import IconsLanguage from "../../assets/icons/language_24px.png";
import Iconstwitter from "../../assets/icons/twitter.png";
import Iconsinstagram from "../../assets/icons/facebook.png";
import Header from "../../Components/Header/header.components";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <div className="HomePage-top">
        <div className="SearchOptoins">
          <SearchOptions />
        </div>

        <div className="lower-item">
          <p>Not sure were to go? Perfect.</p>
          <Link to="/catList">
            <button id="btn-home">
              <img src={btn} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="live-anywhere">
        <h1 id="h1">Live anywhere</h1>
        <LiveView />
        <TryHosting />
      </div>
      <div className="Discover">
        <h1 id="h1">Discover things to do</h1>
        <Discover />
      </div>
      <div className="HomePage-firstFooter">
        <div className="HomePage-firstFooter-child">
          <div className="one">
            <b>ABOUT</b>
            <p>
              Olaogun Ayomide Magaret
              <br />
              2018/2/74165Vl
              <br />
              Suleiman Ohida Abdulazeez
              <br />
              2017/1/68775VL
              <br />
              Suleiman Farouk <br />
              2016/1/63285VL
              <br />
              Samuel Barnabas Aleogho
              <br />
              2017/1/68565VL
              <br />
              Emmanuel Victoria Rhitetse
              <br />
              2017/1/65945VL
              <br />
              Reuben Anibeh Sarah
              <br />
              2017/1/65915VL
              <br />
              Adegboyega Oluwadamilare <br />
              2017/1/65055VL
            </p>
          </div>

          <div className="two">
            <b>COMMUNITY</b>
            <p>
              Diversity & Belonging
              <br />
              Against Discrimination
              <br />
              Accessibility
              <br />
              Airbnb Associates
              <br />
              Host Afghan refugees
              <br />
              Guest Referrals
              <br />
              Gift cards
              <br />
              Airbnb.org
            </p>
          </div>

          <div className="three">
            <b>SUPPORT</b>
            <p>
              How Airbnb works
              <br />
              Our COVID-19 Response
              <br />
              Help Center
              <br />
              Cancellation options
              <br />
              Neighborhood Support
              <br />
              Trust & Safety
            </p>
          </div>
          <div className="four">
            <b>HOST</b>
            <p>
              Diversity & Belonging
              <br />
              Against Discrimination
              <br />
              Accessibility
              <br />
              Airbnb Associates
              <br />
              Host Afghan refugees
              <br />
              Guest Referrals
              <br />
              Gift cards
              <br />
              Airbnb.org
            </p>
          </div>
        </div>
      </div>
      <div className="HomePage-secondFooter">
        <div className="footer-left">
          <b> ©2021 Airbnb, Inc. · Privacy · Terms · Sitemap</b>
        </div>
        <div className="footer-right">
          <img src={IconsLanguage} alt="" />
          <b>English (US) $USD</b>
          <img src={IconsFacebook} alt="" />
          <img src={Iconstwitter} alt="" />
          <img src={Iconsinstagram} alt="" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
