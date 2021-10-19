import React from "react";
import "./live-anywhere-view.styles.scss";
import LiveAnywhere from "./live-anywhere.component";

function LiveView() {
  const items = [
    {
      imgLink: "https://i.ibb.co/y5Fn5T4/1.png",
      text: "Outdoor getaways",
    },
    {
      imgLink: "https://i.ibb.co/1m3wJBc/2.png",
      text: "Unique stays",
    },
    {
      imgLink: "https://i.ibb.co/f1fBGQL/3.png",
      text: "Entire homes",
    },
    {
      imgLink: "https://i.ibb.co/pvtRx8C/4.png",
      text: "Pets allowed",
    },
  ];
  return (
    <div className="LiveView">
      {items.map((value, id) => {
        return (
          <LiveAnywhere imgLink={value.imgLink} text={value.text} key={id} />
        );
      })}
    </div>
  );
}

export default LiveView;
