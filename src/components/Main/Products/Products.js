import React from "react";
import "./Products.css";
import gold_star from "../../../assets/img/gold-star.png";
import grey_star from "../../../assets/img/grey-star.png";
import trainers_effect from "../../../assets/img/trainers-effect.png";
import sells_chart from "../../../assets/img/sells-chart.png";
import running_logo from "../../../assets/img/running_logo.png";
import PopularProducts from "./PopularProducts/PopularProducts";
import ProductInfo from "./ProductInfo/ProductInfo";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        {/*<PopularProducts gold_star={gold_star} grey_star={grey_star} />*/}
        <ProductInfo trainers_effect={trainers_effect} sells_chart={sells_chart} running_logo={running_logo} />
      </div>
    </section>
  );
};

export default Products;
