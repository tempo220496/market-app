import React from "react";
import "./LogosSection.css";
import roller_skates from "../../../assets/img/roller-skates.png";
import reebok from "../../../assets/img/reebok.png";
import adidas from "../../../assets/img/adidas.png";
import nike from "../../../assets/img/nike.png";
import ego from "../../../assets/img/ego.png";
import LogosFirstRow from "./LogosFirstRow/LogosFirstRow";
import LogosSecondRow from "./LogosSecondRow/LogosSecondRow";
import ActionButton from "./ActionButton/ActionButton";

const LogosSection = () => {
  return (
    <section className="logos__section">
      <div className="logos__block">
        <LogosFirstRow roller_skates={roller_skates} adidas={adidas} nike={nike} />
        <LogosSecondRow ego={ego} reebok={reebok} />
        <ActionButton />
      </div>
    </section>
  );
};

export default LogosSection;
