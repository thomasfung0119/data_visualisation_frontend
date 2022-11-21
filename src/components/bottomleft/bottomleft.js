import React from 'react';
import { Globe } from '../globe';
import './bottomleft.css';

function Bottomleft(props) {
  const { country, setCountry } = props;

  return (
    <div className="bottomleft">
      {country && <div class="title">You are checking covid data of {country}</div>}
      {!country && <div class="title">Select a country on the Globe to view its data</div>}
      <Globe sensitivity={75} onClick={(country) => setCountry(country)} />
    </div>

  )
}

export default Bottomleft;