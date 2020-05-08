import React from "react";
import "./Products.css";
import gold_star from "../../../assets/img/gold-star.png";
import trainers_effect from "../../../assets/img/trainers-effect.png";
import sells_chart from "../../../assets/img/sells-chart.png";
import running_logo from "../../../assets/img/running_logo.png";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <div className="popular__products">
          <h1 className="popular__title uppercase margin-zero gotham-bold text-center">
            popular
          </h1>
          <h2 className="products__intro uppercase margin-zero gotham-bold text-center">
            products
          </h2>
          <section className="products__catalogue">
            <h2 className="new__title uppercase gotham-bold margin-zero">
              new
            </h2>
            <div className="products__block flex-row space-between flex-wrap">
              <div className="product">
                <div className="product__img product__first-img"></div>
                <article className="product__evaluation">
                  <h3 className="evaluation__title uppercase gotham-bold">
                    nike graphic pop
                  </h3>
                  <div className="products__stars">
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                  </div>
                  <div className="product__price">
                    <span className="main__price gotham-bold">$21.00</span>
                    <span className="line-through gotham-medium">$25.00</span>
                  </div>
                </article>
              </div>
              <div className="product">
                <div className="product__img product__second-img"></div>
                <article className="product__evaluation">
                  <h3 className="evaluation__title uppercase gotham-bold">
                    nike graphic pop
                  </h3>
                  <div className="products__stars">
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                  </div>
                  <div className="product__price">
                    <span className="main__price gotham-bold">$21.00</span>
                    <span className="line-through gotham-medium">$25.00</span>
                  </div>
                </article>
              </div>
              <div className="product">
                <div className="product__img product__third-img"></div>
                <article className="product__evaluation">
                  <h3 className="evaluation__title uppercase gotham-bold">
                    nike graphic pop
                  </h3>
                  <div className="products__stars">
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                    <img
                      src={gold_star}
                      alt="gold-star"
                      className="product__gold-star"
                    />
                  </div>
                  <div className="product__price">
                    <span className="main__price gotham-bold">$21.00</span>
                    <span className="line-through gotham-medium">$25.00</span>
                  </div>
                </article>
              </div>
            </div>
          </section>
          <span className="action__button gotham-medium color-white gotham-medium uppercase">
            add to cart
          </span>
        </div>
        <div className="product__info">
          <img
            src={trainers_effect}
            alt="trainers-effect"
            className="trainers__effect"
          />
          <img src={sells_chart} alt="sells-chart" className="product__chart" />
          <span className="total__price roboto-condensed-regular">
            90&euro;
          </span>
          <div className="mixed-block">
            <div className="mixed-word uppercase gotham-bold">mixed</div>
            <div className="color-dots">
              <div className="color-dot first-dot"></div>
              <div className="color-dot second-dot"></div>
              <div className="color-dot third-dot"></div>
            </div>
          </div>
          <div className="destination__area flex-center">
            <div className="destination__circle flex-center">
              <span className="destination__distance color-white gotham-medium">
                <span className="destination__number">25</span>
                <br />
                <span className="km">km</span>
                <img
                  src={running_logo}
                  alt="running-logo"
                  className="running__logo"
                />
              </span>
            </div>
          </div>
          <span className="km7 color-white gotham-medium">7km</span>
          <span className="km15 color-white gotham-medium">15km</span>
          <span className="nike-pop uppercase color-white gotham-medium">
            nike-graphic-pop <span className="rarr">&rarr;</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Products;
