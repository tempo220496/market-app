import React from "react";

const DestinationArea = ({running_logo}) => {
  return (
    <div className="destination__area flex-center">
      <div className="destination__circle flex-center">
        <span className="destination__distance color-white gotham-medium">
          <span className="destination__number">25</span>
          <br />
          <span className="km">km</span>
          <img
            src={running_logo}
            alt="running-logo"
            className="running__logo"
          />
        </span>
      </div>
    </div>
  );
};

export default DestinationArea;
