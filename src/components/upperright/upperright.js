import { Line, Scatter, Bar } from "react-chartjs-2"
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
  LineElement,
  Tooltip,
  Legend
} from "chart.js"
import './upperright.css';
import React, { useState, useEffect } from 'react';
import Dropdown from './dropdown'
import axios from 'axios';

function Upperright(props) {
  const { country, setConfirmedCaseData } = props;
  const [xaxis, setXaxis] = useState([])
  const [confirmedData, setConfirmedData] = useState([])
  const [deathData, setDeathData] = useState([])
  const [vaccineData, setVaccineData] = useState([])
  const [smokeData, setSmokeData] = useState([])
  const [exerciseData, setExerciseData] = useState([])
  useEffect(() => {
    if (!country) return;
    const fetch = 'http://127.0.0.1:5000/api/getData?country=' + country;
    axios.get(fetch)
      .then(res => {
        setXaxis(res.data.map(({ Date }) => Date));
        setConfirmedData(res.data.map(({ ConfirmedCase }) => ConfirmedCase));
        setConfirmedCaseData(res.data.map(({ Date, ConfirmedCase }) => [Date, ConfirmedCase]));
        setDeathData(res.data.map(({ DeathCase }) => DeathCase));
        setVaccineData(res.data.map(({ DeathWithVaccine }) => DeathWithVaccine));
        setSmokeData(res.data.map(({ DeathWithSmoke }) => DeathWithSmoke));
        setExerciseData(res.data.map(({ DeathWithExercise }) => DeathWithExercise));
      })
      .catch(err => {
        console.log(err)
      })
  }, [country])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
  )

  const [menu, setMenu] = useState("Line Chart");

  const line_data = {
    labels: xaxis,
    datasets: [
      {
        fill: false,
        label: "Confirmed",
        data: confirmedData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: false,
        label: "Death",
        data: deathData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: false,
        label: "Vacinnated Death",
        data: vaccineData,
        borderColor: 'rgb(178, 224, 97)',
        backgroundColor: 'rgba(178, 224, 97, 0.5)',
      },
      {
        fill: false,
        label: "Smoke Death",
        data: smokeData,
        borderColor: 'rgb(189, 126, 190)',
        backgroundColor: 'rgba(189, 126, 190, 0.5)',
      },
      {
        fill: false,
        label: "Exercise Death",
        data: exerciseData,
        borderColor: 'rgb(255, 181, 90)',
        backgroundColor: 'rgba(255, 181, 90, 0.5)',
      }
    ]
  }
  const line_bar_data = {
    labels: xaxis,
    datasets: [
      {
        type: 'line',
        fill: false,
        label: "Confirmed",
        data: confirmedData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        type: 'line',
        fill: false,
        label: "Death",
        data: deathData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        type: 'bar',
        fill: false,
        label: "Vacinnated Death",
        data: vaccineData,
        borderColor: 'rgb(178, 224, 97)',
        backgroundColor: 'rgba(178, 224, 97, 0.5)',
      },
      {
        type: 'bar',
        fill: false,
        label: "Smoke Death",
        data: smokeData,
        borderColor: 'rgb(189, 126, 190)',
        backgroundColor: 'rgba(189, 126, 190, 0.5)',
      },
      {
        type: 'bar',
        fill: false,
        label: "Exercise Death",
        data: exerciseData,
        borderColor: 'rgb(255, 181, 90)',
        backgroundColor: 'rgba(255, 181, 90, 0.5)',
      }
    ]
  }
  const area_data = {
    labels: xaxis,
    datasets: [
      {
        fill: true,
        label: "Confirmed",
        data: confirmedData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: "Death",
        data: deathData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        fill: true,
        label: "Vacinnated Death",
        data: vaccineData,
        borderColor: 'rgb(178, 224, 97)',
        backgroundColor: 'rgba(178, 224, 97, 0.5)',
      },
      {
        fill: true,
        label: "Smoke Death",
        data: smokeData,
        borderColor: 'rgb(189, 126, 190)',
        backgroundColor: 'rgba(189, 126, 190, 0.5)',
      },
      {
        fill: true,
        label: "Exercise Death",
        data: exerciseData,
        borderColor: 'rgb(255, 181, 90)',
        backgroundColor: 'rgba(255, 181, 90, 0.5)',
      }
    ]
  }
  const bar_data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "Confirmed",
        data: confirmedData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "Death",
        data: deathData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: "Vacinnated Death",
        data: vaccineData,
        borderColor: 'rgb(178, 224, 97)',
        backgroundColor: 'rgba(178, 224, 97, 0.5)',
      },
      {
        label: "Smoke Death",
        data: smokeData,
        borderColor: 'rgb(189, 126, 190)',
        backgroundColor: 'rgba(189, 126, 190, 0.5)',
      },
      {
        label: "Exercise Death",
        data: exerciseData,
        borderColor: 'rgb(255, 181, 90)',
        backgroundColor: 'rgba(255, 181, 90, 0.5)',
      }
    ]
  }
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: 'white'
        },
      }
    },
    scales: {
      yAxes: {
        grid: {
          color: 'grey',
        },
        ticks: {
          color: 'white',
          fontSize: 12,
        },
      },
      xAxes: {
        grid: {
          color: 'grey',
        },
        ticks: {
          color: 'white',
          fontSize: 12,
        }
      },
    },
  }

  const getChart = (menu) => {
    if (!country) {
      return (<h1>No data</h1>)
    }
    switch (menu) {
      case 'Line Chart':
        return (
          <Line
            data={line_data}
            options={options}
          />
        )
      case 'Area Chart':
        return (
          <Line
            data={area_data}
            options={options}
          />
        )
      case 'Line Bar Chart':
        return (
          <Line
            data={line_bar_data}
            options={options}
          />
        )
      case 'Bar Chart':
        return (
          <Bar
            data={bar_data}
            options={options}
          />
        )
      default:
        return (<h1>Unknown Chart</h1>)
    }
  };

  return (
    <div className="upperright">
      <div class="title">
        {country && <h1>Relational {menu} of {props.country}</h1>}
        {!country && <h1>Select a country</h1>}
        <Dropdown
          menu={menu}
          setMenu={setMenu}
        />
      </div>
      {getChart(menu)}
    </div>
  )
}

export default Upperright;
