  import React from 'react';
  import { Globe } from '../globe';
  import './bottomleft.css';
  import ButtonGroup from '../buttons/buttongroup';
  function Bottomleft(props) {
    const { country, setCountry } = props;

    return (
        <div className="bottomleft">
          <div>
            <ButtonGroup buttons={[
              {text: "number of vaccination", imageURL: "./vaccine.svg"},
              {text: "death", imageURL: "./vaccine.svg"},
              {text: "vaccination rate", imageURL: "./vaccine.svg"},
              {text: "infection", imageURL: "./vaccine.svg"}
          ]}
            />
          </div>
            <div class="title">You are checking covid data of {country}</div>
            <Globe sensitivity={75} onClick={(country) => setCountry(country)} />
          
        </div>


    )
  }

  export default Bottomleft;