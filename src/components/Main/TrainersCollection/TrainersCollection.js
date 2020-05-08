import React from "react";
import "./TrainersCollection.css";
import TrainersBlock from "./TrainersBlock/TrainersBlock";

const TrainersCollection = () => {
  return (
    <section className="trainers__collection">
      <div className="container">
        <h1 className="trainers__title uppercase">Men's</h1>
        <h2 className="trainers__intro uppercase">collection</h2>
        <TrainersBlock />
      </div>
    </section>
  );
};

export default TrainersCollection;
