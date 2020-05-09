import React from 'react';
import ProductsCatalogue from './ProductsCatalogue/ProductsCatalogue';

const PopularProducts = ({gold_star,grey_star}) => {
    return (
        <div className="popular__products">
          <h1 className="popular__title uppercase margin-zero gotham-bold text-center">
            popular
          </h1>
          <h2 className="products__intro uppercase margin-zero gotham-bold text-center">
            products
          </h2>
          <ProductsCatalogue gold_star={gold_star} grey_star={grey_star} />
          <span className="action__button gotham-medium color-white gotham-medium uppercase">
            add to cart
          </span>
        </div>
    );
}

export default PopularProducts;
