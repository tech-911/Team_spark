import React from "react";
import "./Text.styles.scss";
function Text({ value, subValue }) {
  return (
    <div className="Text">
      <h3>{value}</h3>
      {subValue ? <span>{subValue}</span> : null}
    </div>
  );
}

export default Text;
