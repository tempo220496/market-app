import React from 'react';

const LogosFirstRow = ({roller_skates,adidas,nike}) => {
    return (
        <section className="logos__first-row flex-row space-between flex-wrap">
          <img src={roller_skates} alt="roller-skates" className="logos__img" />
          <img src={adidas} alt="adidas" className="logos__img adidas__logo" />
          <div className="middle__logo">
            <img src={nike} alt="nike" className="logos__img nike__logo" />
            <h1 className="nike__title uppercase color-white gotham-bold">
              nike
            </h1>
          </div>
        </section>
    );
}

export default LogosFirstRow;
