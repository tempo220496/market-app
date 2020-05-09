import React from "react";
import "./ActionInfo.css";
import InfoBlock from "./InfoBlock/InfoBlock";
import ActionSubscribe from "./ActionSubscribe/ActionSubscribe";

const ActionInfo = () => {
  return (
    <section className="action__info">
      <div className="container flex-row align-items-center space-between flex-wrap">
        <InfoBlock />
        <ActionSubscribe />
      </div>
    </section>
  );
};

export default ActionInfo;
