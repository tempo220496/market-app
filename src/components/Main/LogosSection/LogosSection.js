import React from "react";
import "./LogosSection.css";
import roller_skates from "../../../assets/img/roller-skates.png";
import reebok from "../../../assets/img/reebok.png";
import adidas from "../../../assets/img/adidas.png";
import nike from "../../../assets/img/nike.png";
import ego from "../../../assets/img/ego.png";

const LogosSection = () => {
  return (
    <section className="logos__section">
      <div className="logos__block">
        <section className="logos__first-row flex-row space-between flex-wrap">
          <img src={roller_skates} alt="roller-skates" className="logos__img" />
          <img src={adidas} alt="adidas" className="logos__img adidas__logo" />
          <div className="middle__logo">
            <img src={nike} alt="nike" className="logos__img nike__logo" />
            <h1 className="nike__title uppercase color-white gotham-bold">
              nike
            </h1>
          </div>
        </section>
        <section className="logos__second-row flex-row space-around flex-wrap">
          <img src={ego} alt="ego" className="logos__img" />
          <img src={reebok} alt="reebok" className="logos__img" />
        </section>
        <span className="action__button gotham-medium color-white gotham-medium uppercase">
          view all
        </span>
      </div>
    </section>
  );
};

export default LogosSection;
