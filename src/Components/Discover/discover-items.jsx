import React from "react";
import Text from "../Text/Text.component";
import "./discover-items.scss";

function DiscoverItems({ imgLink, text, subText }) {
  return (
    <div className="Discover-items">
      <img id="discover-item-image" src={imgLink} alt="" />
      <div className="discover-text">
        <Text value={text} subValue={subText} />
      </div>
    </div>
  );
}

export default DiscoverItems;
