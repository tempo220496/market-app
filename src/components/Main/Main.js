import React from "react";
import TrainersCollection from "./TrainersCollection/TrainersCollection";
import LogosSection from "./LogosSection/LogosSection";
import Products from "./Products/Products";
import ActionInfo from "./ActionInfo/ActionInfo";

const Main = () => {
  return (
    <main className="main">
      {/*<TrainersCollection />
      <LogosSection />*/}
      <Products />
      {/*<ActionInfo />*/}
    </main>
  );
};

export default Main;