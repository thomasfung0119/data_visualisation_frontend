import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { interpolateRdBu } from 'd3';
import './upperleft.css';

function Upperleft(props) {
  const { country } = props;
  const [error, setError] = useState(true);
  const [confirmedCase, setConfirmedCase] = useState();
  const [mortalityCase, setMortalityCase] = useState();
  const [vaccinatedDeath, setVaccinatedDeath] = useState();
  const [correlation, setCorrelation] = useState();
  const [confirmedCaseColor, setConfirmedCaseColor] = useState("#FFFFFF");
  const [mortalityCaseColor, setMortalityCaseColor] = useState("#FFFFFF");
  const [vaccinatedDeathColor, setVaccinatedDeathColor] = useState("#FFFFFF");
  const [correlationColor, setCorrelationColor] = useState("#FFFFFF");

  useEffect(
    () => {
      if (!country) return;
      const fetch = 'http://127.0.0.1:5000/api/getSumUpData?country=' + country;
      axios.get(fetch)
        .then(res => {
          console.log(res);
          setError(false);
          setConfirmedCase(res.data['MortalityCase']);
          setMortalityCase(res.data['VaccineCorrelation']);
          setVaccinatedDeath(res.data['SmokeCorrelation']);
          setCorrelation(res.data['ExerciseCorrelation']);

          // The constant used here (e.g. 2e9) is for placeholder only
          // Later can be replaced by the population of the country or other sorts of data
          // 0.1 to 0.9 is used to prevent the color of the text becoming too dark to read
          const caseRange = 1 - Math.min(Math.max(res.data['MortalityCase']/60e6, 0.1), 0.9);
          const mortaltyRange = Math.min(Math.max(res.data['VaccineCorrelation']/100, 0.1), 0.9);
          const vaccineDeathRange = 1 - Math.min(Math.max(res.data['SmokeCorrelation']/100, 0.1), 0.9);
          const correlationRange = Math.min(Math.max(res.data['ExerciseCorrelation']/100, 0.1), 0.9);

          setConfirmedCaseColor(interpolateRdBu(caseRange));
          setMortalityCaseColor(interpolateRdBu(mortaltyRange));
          setVaccinatedDeathColor(interpolateRdBu(vaccineDeathRange));
          setCorrelationColor(interpolateRdBu(correlationRange));
        })
        .catch(err => {
          console.log(err);
          setConfirmedCaseColor("#FFFFFF")
          setMortalityCaseColor("#FFFFFF")
          setVaccinatedDeathColor("#FFFFFF")
          setCorrelationColor("#FFFFFF")
          setError(true);
        })
    }, [country]
  )

  return (
    <div className='upperleft'>
      <div class="upperleft-parent">
        <div class="upperleft-div1"> <h1>Mortality Case</h1> </div>
        <div class="upperleft-div2"> <h1>Vaccine Correlation</h1> </div>
        <div class="upperleft-div3"> <h1>Smoke Correlation</h1> </div>
        <div class="upperleft-div4"> <h1>Exercise Correlation</h1> </div>
        <div class="upperleft-div5"> <h2 style={{ color: confirmedCaseColor }}> {(!error) ? confirmedCase?.toLocaleString() : '-'} </h2> </div>
        <div class="upperleft-div6"> <h2 style={{ color: mortalityCaseColor }}> {(!error) ? mortalityCase?.toLocaleString() : '-'}% </h2> </div>
        <div class="upperleft-div7"> <h2 style={{ color: vaccinatedDeathColor }}> {(!error) ? vaccinatedDeath?.toLocaleString() : '-'}% </h2> </div>
        <div class="upperleft-div8"> <h2 style={{ color: correlationColor }}> {(!error) ? parseFloat(correlation).toFixed(2) : '-'}% </h2> </div>
      </div>
    </div>
  );
}

export default Upperleft;