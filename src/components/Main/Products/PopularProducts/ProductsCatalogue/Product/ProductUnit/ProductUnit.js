import React from 'react';
import ProductPrice from './ProductPrice/ProductPrice';
import StarImg from './StarImg/StarImg';

const ProductUnit = ({img,title,main_price,discount,gold_img,grey_img,goldStars,greyStars}) => {
    return (
        <div className="product">
        <div className={img}></div>
        <article className="product__evaluation">
          <h3 className="evaluation__title uppercase gotham-bold">
            {title} graphic pop
          </h3>
          <div className="products__stars">
            <StarImg goldStars={goldStars} greyStars={greyStars} gold_img={gold_img} grey_img={grey_img} />
          </div>
          <ProductPrice main_price={main_price} discount={discount} />
        </article>
      </div>
    );
}

export default ProductUnit;
