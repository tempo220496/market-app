import React from "react";
import CatalogueCollection from "../CatalogueCollection/CatalogueCollection";
import uniqid from "uniqid";

const TrainersFirstRow = ({firstRow}) => {
  return (
    <section className="trainers__first-row flex-row flex-wrap">
      {firstRow.map(type=><CatalogueCollection key={uniqid()} collection={type.collection} catalogueTitle={type.catalogueTitle} />)}
    </section>
  );
};

export default TrainersFirstRow;
