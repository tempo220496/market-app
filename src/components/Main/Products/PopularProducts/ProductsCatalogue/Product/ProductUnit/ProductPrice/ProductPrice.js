import React from "react";

const ProductPrice = ({main_price,discount}) => {
  return (
    <div className="product__price">
      <span className="main__price gotham-bold">${discount}</span>
      <span className="line-through gotham-medium">${main_price}</span>
    </div>
  );
};

export default ProductPrice;
