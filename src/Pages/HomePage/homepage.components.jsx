import React from "react";
import "./homepage.styles.scss";
import SearchOptions from "../../Components/SearchOptions/searchOptions.components";
import btn from "../../assets/I’m flexible.png";
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
      <div className="HomePage-middle">im the middle</div>
      <div className="HomePage-firstFooter">im the first footer</div>
      <div className="HomePage-secondFooter">im a footer</div>
    </div>
  );
}

export default HomePage;
