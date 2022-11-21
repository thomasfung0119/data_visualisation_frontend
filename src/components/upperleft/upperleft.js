import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './upperleft.css';

function Upperleft(props) {
  const { country } = props;
  const [confirmedCase, setConfirmedCase] = useState()
  const [mortalityCase, setMortalityCase] = useState()
  const [vaccinatedDeath, setVaccinatedDeath] = useState()
  const [correlation, setCorrelation] = useState()

  useEffect(
    () => {
      if (!country) return;
      const fetch = 'http://127.0.0.1:5000/api/getSumUpData?country=' + country;
      axios.get(fetch)
        .then(res => {
          console.log(res);
          setConfirmedCase(res.data['ConfirmedCase']);
          setMortalityCase(res.data['MortalityCase']);
          setVaccinatedDeath(res.data['VaccinatedDeathCase']);
          setCorrelation(res.data['CorrelationInPercentage']);
        })
        .catch(err => {
          console.log(err)
        })
    }, [country]
  )

  return (
    <div className='upperleft'>
      <div class="upperleft-parent">
        <div class="upperleft-div1"> <h1>Total Confirmed Case</h1> </div>
        <div class="upperleft-div2"> <h1>Total Mortality Case</h1> </div>
        <div class="upperleft-div3"> <h1>Total Vaccinate Death</h1> </div>
        <div class="upperleft-div4"> <h1>Correlation Rate</h1> </div>
        <div class="upperleft-div5"> <h2> {country ? confirmedCase : '-'} </h2> </div>
        <div class="upperleft-div6"> <h2> {country ? mortalityCase : '-'} </h2> </div>
        <div class="upperleft-div7"> <h2> {country ? vaccinatedDeath : '-'} </h2> </div>
        <div class="upperleft-div8"> <h2> {country ? parseFloat(correlation).toFixed(2) : '-'}% </h2> </div>
      </div>
    </div>
  );
}

export default Upperleft;