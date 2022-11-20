import React from 'react';
import { Globe } from '../globe';
import './bottomleft.css';

function Bottomleft(props) {
  const { country, setCountry } = props;

  return (
    <div className="bottomleft">
      <Globe sensitivity={75} onClick={(country) => setCountry(country)} />
    </div>

  )
}

export default Bottomleft;