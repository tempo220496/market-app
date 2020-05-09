import React, { Fragment } from "react";
import ProductUnit from "./ProductUnit/ProductUnit";

const PRODUCTS=[
    {id:1,img:"product__img product__first-img",title:"nike",goldStars:5,greyStars:0,mainPrice:25,discount:23},
    {id:2,img:"product__img product__second-img",title:"polo",goldStars:4,greyStars:1,mainPrice:25,discount:22},
    {id:3,img:"product__img product__third-img",title:"puma",goldStars:3,greyStars:2,mainPrice:25,discount:21}
];

const Product = ({ gold_star,grey_star }) => {
  return (
    <Fragment>
        {
            PRODUCTS.map(product=>{
                return (
                    <ProductUnit 
                    key={product.id}
                    img={product.img} 
                    title={product.title} 
                    main_price={product.mainPrice} 
                    discount={product.discount}
                    goldStars={product.goldStars}
                    greyStars={product.greyStars} 
                    gold_img={gold_star}
                    grey_img={grey_star} />
                )
            })
        }
    </Fragment>
  );
};

export default Product;