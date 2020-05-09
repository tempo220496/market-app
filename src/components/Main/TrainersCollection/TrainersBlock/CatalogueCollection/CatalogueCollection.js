import React from "react";
import ViewAll from "../ViewAll/ViewAll";
import "./CatalogueCollection.css";

const CatalogueCollection = ({collection,catalogueTitle}) => {
  return (
    <div className={collection}>
      <section className="catalogue__collection">
        <h1 className="catalogue__title uppercase color-white gotham-bold">
          {catalogueTitle}
        </h1>
        <h1 className="catalogue__intro uppercase color-white gotham-bold">
          collection
        </h1>
        <ViewAll />
      </section>
    </div>
  );
};

export default CatalogueCollection;
