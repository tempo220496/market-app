import React from "react";
import "./Dot.css";

const Dots = () => {
  return (
    <div className="dots">
      <div className="dot selected-dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </div>
  );
};

export default Dots;
