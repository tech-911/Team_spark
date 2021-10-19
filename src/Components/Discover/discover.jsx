import React from "react";
import DiscoverItems from "./discover-items";
import "./discover.scss";
function Discover() {
  return (
    <div className="discover">
      <DiscoverItems
        imgLink="https://i.ibb.co/3TYX2KF/a.png"
        text="Experiences"
        subText="Find unforgettable activities near you."
      />
      <DiscoverItems
        imgLink="https://i.ibb.co/sW1nSnF/b.png"
        text="Online Experiences"
        subText="Live, interactive activities led by Hosts."
      />
      <DiscoverItems
        imgLink="https://i.ibb.co/Srs2Jy3/c.png"
        text="Featured collection: Wanderlust"
        subText="Travel from home with Online Experiences."
      />
    </div>
  );
}
export default Discover;
