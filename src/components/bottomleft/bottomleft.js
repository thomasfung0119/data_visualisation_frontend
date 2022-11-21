import React, { useState } from "react";
import { Globe } from "../globe";
import "./bottomleft.css";
import * as d3 from "d3";
import ButtonGroup from "../buttons/buttongroup";

function Bottomleft(props) {
  const { country, setCountry, data } = props;
  const [menu, setMenu] = useState("infection");

  const getData = (obj) => {
    if (!obj) return null;
    switch (menu) {
      case "infection":
        return obj.ConfirmedCase;
      case "death":
        return obj.MortalityCase;
      default:
        return null;
    }
  }

  const getInterpolator = () => {
    switch (menu) {
      case "infection":
        return d3.interpolateBlues;
      case "death":
        return d3.interpolateReds;
      default:
        return null;
    }
  }

  let max = 0;
  for (let key in data) {
    if (getData(data[key]) > max) {
      max = getData(data[key]);
    }
  }

  return (
    <div className="bottomleft">
      <ButtonGroup
        buttons={[
          { text: "death", imageURL: "./death.svg" },
          { text: "infection", imageURL: "./infection.svg" },
        ]}
        selectedButton={menu}
        onToggle={(menu) => { setMenu(menu) }}
      />
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
            data[country] ? getData(data[country]) / max : null
          }
          interpolator={getInterpolator()}
        />
      )}
    </div>
  );
}

export default Bottomleft;
