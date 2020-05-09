import React from "react";
import CatalogueCollection from "../CatalogueCollection/CatalogueCollection";
import uniqid from "uniqid";

const TrainersSecondRow = ({secondRow}) => {
  return (
    <section className="trainers__second-row flex-row flex-wrap">
      {secondRow.map(type=><CatalogueCollection key={uniqid()} collection={type.collection} catalogueTitle={type.catalogueTitle} />)}
    </section>
  );
};

export default TrainersSecondRow;
