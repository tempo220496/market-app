import React from "react";
import HeaderSection from "./HeaderSection/HeaderSection";
import "./HeaderBackgroundCrimson.css"

const HeaderBackgroundCrimson = () => {
  return (
    <div className="header__background_crimson">
      <section className="header__banner">
        <div className="container">
          <HeaderSection />
        </div>
      </section>
    </div>
  );
};

export default HeaderBackgroundCrimson;
