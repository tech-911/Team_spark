import React from "react";
import "./homepage.styles.scss";
import SearchOptions from "../../Components/SearchOptions/searchOptions.components";
import btn from "../../assets/I’m flexible.png";
import LiveView from "../../Components/live-anywhere-component/live-anywhere.view";
import TryHosting from "../../Components/tryhosting/tryhosting.components";
import Discover from "../../Components/Discover/discover";

function HomePage() {
  return (
    <div className="HomePage">
      <div className="HomePage-top">
        <div className="SearchOptoins">
          <SearchOptions />
        </div>

        <div className="lower-item">
          <p>Not sure were to go? Perfect.</p>
          <button>
            <img src={btn} alt="" />
          </button>
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
        <div className="one">
          <b>ABOUT</b>
          <p>
            How Airbnb works
            <br />
            Newsroom
            <br />
            Investors
            <br />
            Airbnb Plus
            <br />
            Airbnb Luxe
            <br />
            HotelTonight
            <br />
            Airbnb for Work
            <br />
            Made possible by Hosts
            <br />
            Careers
            <br />
            Founders' Letter
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
      <div className="HomePage-secondFooter">
        <div className="footer-left">
          ©2021 Airbnb, Inc. · Privacy · Terms · Sitemap
        </div>
        <div className="footer-right"></div>
      </div>
    </div>
  );
}

export default HomePage;
