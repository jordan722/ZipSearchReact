import React from 'react';

function CityCard(props){
  return (
    <div class="card" style={{display:'inline-block', width:'400px'}}>
      <b> City: </b>  {props.City} <br/>
      <b> State: </b>  {props.State} <br/>
      <b> Location: </b>  {props.Lat} , {props.Long} <br/>
      <b> Estimated Population: </b> {props.EstimatedPopulation} <br/>
      <b> Total Wages: </b> {props.TotalWages} <br/>
    </div>
  );
}

export default CityCard;
