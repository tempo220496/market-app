import React, { Fragment } from 'react';

const StarImg = ({goldStars,greyStars,gold_img,grey_img}) => {
    //const gold=goldStars.map(goldStar=><img key={goldStar++} src={gold_img} alt="gold-star" className="product__gold-star"/>);
    //const grey=greyStars.map(greyStar=><img key={greyStar++} src={grey_img} alt="gold-star" className="product__gold-star"/>);
    const gold=[];
    for(let i=0;i<goldStars;i++){
        gold.push(<img key={i} src={gold_img} alt="gold-star" className="product__gold-star"/>);
    }
    const grey=[];
    for(let i=0;i<greyStars;i++){
        grey.push(<img key={i} src={grey_img} alt="gold-star" className="product__gold-star"/>);
    }
    return (
        <Fragment>
            {gold}
            {grey}
        </Fragment>
    );
}

export default StarImg;
