import React from 'react';
import { Globe } from '../globe';
import './bottomleft.css';

function Bottomleft(props) {
  const { country, setCountry } = props;

  return (
    <div className="bottomleft">
      <div class="title">You are checking covid data of {country}</div>
      <Globe sensitivity={75} onClick={(country) => setCountry(country)} />
    </div>

  )
}

export default Bottomleft;