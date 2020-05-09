import React from 'react';

const LogosSecondRow = ({ego,reebok}) => {
    return (
        <section className="logos__second-row flex-row space-around flex-wrap">
          <img src={ego} alt="ego" className="logos__img" />
          <img src={reebok} alt="reebok" className="logos__img" />
        </section>
    );
}

export default LogosSecondRow;
