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
import React, { useState } from 'react';
import Dropdown from './dropdown'

function Upperright(props) {
  const { country } = props;
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

  const line_data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        fill: false,
        label: "Item1",
        data: [400, 300, 350, 200, 280],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: false,
        label: "Item2",
        data: [300, 400, 350, 100, 220],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }
  const area_data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        fill: true,
        label: "Item1",
        data: [400, 300, 350, 200, 280],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: "Item2",
        data: [300, 400, 350, 100, 220],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }
  const scatter_data = {
    datasets: [
      {
        fill: true,
        label: "Item1",
        data: [{ x: -10, y: 0 }, { x: 0, y: 10 }, { x: 10, y: 5 }, { x: 0.5, y: 5.5 }],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: "Item2",
        data: [{ x: -2, y: 0 }, { x: 3, y: 10 }, { x: 10, y: 6 }, { x: 1.5, y: 5.5 }],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }
  const bar_data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        label: "Item1",
        data: [400, 300, 350, 200, 280],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: "Item2",
        data: [300, 400, 350, 100, 220],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
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
          color: '#FFFFFF',
        },
        ticks: {
          color: 'white',
          fontSize: 12,
        }
      },
      xAxes: {
        grid: {
          color: '#FFFFFF',
        },
        ticks: {
          color: 'white',
          fontSize: 12,
        }
      },
    },
  }
  const [menu, setMenu] = useState("Line Chart");

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
      case 'Scatter Chart':
        return (
          <Scatter
            data={scatter_data}
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
        {country && <h1>{menu} of {props.country}</h1>}
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