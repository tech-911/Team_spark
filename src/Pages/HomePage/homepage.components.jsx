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
      <div className="HomePage-firstFooter">im the first footer</div>
      <div className="HomePage-secondFooter">im a footer</div>
    </div>
  );
}

export default HomePage;
