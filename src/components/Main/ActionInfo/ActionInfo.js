import React from "react";
import "./ActionInfo.css";

const ActionInfo = () => {
  return (
    <section className="action__info">
      <div className="container flex-row align-items-center space-between flex-wrap">
        <div className="info__block">
          <h1 className="info__title color-white gotham-bold margin-zero">
            News letter
          </h1>
          <p className="info__text color-white roboto-regular">
            You may unsubscribe at any moment. For that purpose, please find our
            contact info in the legal notice.
          </p>
        </div>
        <div className="action__subscribe flex-row align-items-center space-between">
          <span className="action__notice uppercase color-white gotham-medium">
            your email address
          </span>
          <span className="subscribe__button uppercase gotham-medium">
            subscribe
          </span>
        </div>
      </div>
    </section>
  );
};

export default ActionInfo;
