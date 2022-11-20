import React from 'react';
import { Globe } from '../globe';
import './bottomleft.css';
import Button from '../buttons/button';
import ButtonGroup from '../buttons/buttongroup';
function Bottomleft(props) {
  const { country, setCountry } = props;

  return (
    <div className="bottomleft">
      <ButtonGroup buttons={[{text: "number of vaccination"},{text: "death"},{text: "vaccination rate"},{text: "infection"}]}/>
      <div class="title">You are checking covid data of {country}</div>
      <Globe sensitivity={75} onClick={(country) => setCountry(country)} />
    </div>

  )
}

export default Bottomleft;