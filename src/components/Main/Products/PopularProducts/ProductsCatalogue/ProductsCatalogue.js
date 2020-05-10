import React from "react";
import Product from "./Product/Product";
import "./ProductsCatalogue.css";

const ProductsCatalogue = ({gold_star,grey_star}) => {
  return (
    <section className="products__catalogue">
      <h2 className="new__title uppercase gotham-bold margin-zero">new</h2>
      <div className="products__block flex-row space-between flex-wrap">
        <Product gold_star={gold_star} grey_star={grey_star} />
      </div>
    </section>
  );
};

export default ProductsCatalogue;
