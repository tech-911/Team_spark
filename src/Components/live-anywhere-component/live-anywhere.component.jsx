import React from "react";
import "./live-anywhere.style.scss";
function LiveAnywhere(props) {
  const { imgLink, text } = props;
  return (
    <div className="LiveAnywhere">
      <img src={imgLink} alt="" />
      <span id="span1">{text}</span>
    </div>
  );
}

export default LiveAnywhere;
