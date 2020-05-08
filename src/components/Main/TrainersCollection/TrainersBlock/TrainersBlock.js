import React from 'react';
import "./TrainersBlock.css";

const TrainersBlock = () => {
    return (
        <div className="trainers__block">
          <section className="trainers__first-row flex-row flex-wrap">
            <div className="mens__collection type__collection">
              <section className="catalogue__collection">
                <h1 className="catalogue__title uppercase color-white gotham-bold">
                  men's
                </h1>
                <h1 className="catalogue__intro uppercase color-white gotham-bold">
                  collection
                </h1>
                <div className="view__all">
                  <span className="uppercase gotham-bold">view all</span>
                </div>
              </section>
            </div>
            <div className="unisex__collection type__collection">
              <section className="catalogue__collection">
                <h1 className="catalogue__title uppercase color-white gotham-bold">
                  unisex
                </h1>
                <h1 className="catalogue__intro uppercase color-white gotham-bold">
                  collection
                </h1>
                <div className="view__all">
                  <span className="uppercase gotham-bold">view all</span>
                </div>
              </section>
            </div>
          </section>
          <section className="trainers__second-row flex-row flex-wrap">
            <div className="womens__collection type__collection">
              <section className="catalogue__collection">
                <h1 className="catalogue__title uppercase color-white gotham-bold">
                  womens
                </h1>
                <h1 className="catalogue__intro uppercase color-white gotham-bold">
                  collection
                </h1>
                <div className="view__all">
                  <span className="uppercase gotham-bold">view all</span>
                </div>
              </section>
            </div>
            <div className="lifestyle__collection type__collection">
              <section className="catalogue__collection">
                <h1 className="catalogue__title uppercase color-white gotham-bold">
                  lifestyle
                </h1>
                <h1 className="catalogue__intro uppercase color-white gotham-bold">
                  collection
                </h1>
                <div className="view__all">
                  <span className="uppercase gotham-bold">view all</span>
                </div>
              </section>
            </div>
          </section>
          <div className="dots">
            <div className="dot selected-dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
    );
}

export default TrainersBlock;
