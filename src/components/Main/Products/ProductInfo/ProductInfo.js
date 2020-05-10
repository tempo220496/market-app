import React from "react";
import MixedBlock from "./MixedBlock/MixedBlock";
import DestinationArea from "./DestinationArea/DestinationArea";
import "./ProductInfo.css";

const ProductInfo = ({trainers_effect,sells_chart,running_logo}) => {
  return (
    <div className="product__info">
      <img
        src={trainers_effect}
        alt="trainers-effect"
        className="trainers__effect"
      />
      <img src={sells_chart} alt="sells-chart" className="product__chart" />
      <span className="total__price roboto-condensed-regular">90&euro;</span>
      <MixedBlock />
      <DestinationArea running_logo={running_logo} />
      <span className="km7 color-white gotham-medium">7km</span>
      <span className="km15 color-white gotham-medium">15km</span>
      <span className="nike-pop uppercase color-white gotham-medium">
        nike-graphic-pop <span className="rarr">&rarr;</span>
      </span>
    </div>
  );
};

export default ProductInfo;
