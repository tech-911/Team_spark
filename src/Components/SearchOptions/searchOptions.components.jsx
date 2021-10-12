import React from "react";
import "./searchOptions.styles.scss";
import searchIcon from "../../assets/Group 3.png";
import Text from "../Text/Text.component";
function SearchOptions() {
  return (
    <div className="SearcOptions">
      <div className="first-text">
        {" "}
        <Text value="Location" subValue="Where are you going?" />
      </div>

      <Text value="Check in" subValue="Add dates" />
      <Text value="Check out" subValue="Add dates" />
      <Text value="Guests" subValue="Add guests" />

      <img src={searchIcon} alt="" />
    </div>
  );
}

export default SearchOptions;
