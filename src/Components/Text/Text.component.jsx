import React from "react";
import "./Text.styles.scss";
function Text({ value, subValue }) {
  return (
    <div className="Text">
      <h3>
        {value}
        
      </h3>
      <span>{subValue}</span>
    </div>
  );
}

export default Text;
