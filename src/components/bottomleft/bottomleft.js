import React from 'react';
import './bottomleft.css';

function Bottomleft(props) {
  const {country, setCountry} = props;

  return (
    <div className="bottomleft">
      <p>The country you choose is {country}</p>
      <div>
        <button onClick={() =>  {setCountry("Hong Kong"); }}>
          Hong Kong
        </button>
        <button onClick={() =>  {setCountry("Japan"); }}>
          Japan
        </button>
        <button onClick={() =>  {setCountry("Canada"); }}>
          Canada
        </button>
        <button onClick={() =>  {setCountry("America"); }}>
          America
        </button>
      </div>
    </div>
    
  )
}

export default Bottomleft;