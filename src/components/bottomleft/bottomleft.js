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
              {text: "death", imageURL: "./death.svg"},
              {text: "vaccination rate", imageURL: "./rate.svg"},
              {text: "infection", imageURL: "./infection.svg"}
          ]}
            />
          </div>
            <div class="title">You are checking covid data of {country}</div>
            <Globe sensitivity={75} onClick={(country) => setCountry(country)} />
          
        </div>


    )
  }

  export default Bottomleft;