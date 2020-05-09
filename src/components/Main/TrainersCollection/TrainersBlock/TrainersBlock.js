import React from 'react';
import "./TrainersBlock.css";
import TrainersFirstRow from './TrainersFirstRow/TrainersFirstRow';
import TrainersSecondRow from './TrainersSecondRow/TrainersSecondRow';
import Dots from './Dots/Dots';

const Rows={
  FirstRow:[
  {collection:"mens__collection type__collection",catalogueTitle:"men's"},
  {collection:"unisex__collection type__collection",catalogueTitle:"unisex"}
  ],
  SecondRow:[
  {collection:"womens__collection type__collection",catalogueTitle:"womens"},
  {collection:"lifestyle__collection type__collection",catalogueTitle:"lifestyle"}
  ]
};

const TrainersBlock = () => {
    return (
        <div className="trainers__block">
          <TrainersFirstRow firstRow={Rows.FirstRow}/>
          <TrainersSecondRow secondRow={Rows.SecondRow} />
          <Dots />
        </div>
    );
}

export default TrainersBlock;
