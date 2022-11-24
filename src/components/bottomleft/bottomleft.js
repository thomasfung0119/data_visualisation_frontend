import React from "react";
import { Globe } from "../globe";
import "./bottomleft.css";
import * as d3 from "d3";

function Bottomleft(props) {
  const { country, setCountry, data } = props;

  let max = 0;
  for (let key in data) {
    if (data[key].ConfirmedCase > max) {
      max = data[key].ConfirmedCase;
    }
  }

  return (
    <div className="bottomleft">
      {country && (
        <div class="title">You are checking covid data of {country}</div>
      )}
      {!country && (
        <div class="title">Select a country on the Globe to view its data</div>
      )}
      {data && (
        <Globe
          sensitivity={75}
          onClick={(country) => setCountry(country)}
          valueMapper={(country) =>
            data[country] ? data[country]?.ConfirmedCase / max : null
          }
          interpolator={d3.interpolateBlues}
        />
      )}
      {data && (
      <div>
        <div class="worst">Less Confirmed Case</div> 
        <div class="best">More Confirmed Case</div>
      </div>
      )}
    </div>
  );
}

export default Bottomleft;
