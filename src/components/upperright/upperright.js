import { Line } from "react-chartjs-2"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend
} from "chart.js"
import './upperright.css';
import React, { useState } from 'react';
import Dropdown from './dropdown'

function Upperright(props) {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Legend
  )
  
  const data = {
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

  const [menu, setMenu] = useState("Line Chart");

  return (
    <div className="upperright">
      <Dropdown 
        menu = {menu}
        setMenu = {setMenu}
      />
      <p>{menu} of {props.country}</p>
      <Line
        data={data}
        options={{
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
              yAxes:{
                  grid: {
                      color: '#FFFFFF',
                  },
                  ticks:{
                      color: 'white',
                      fontSize: 12,
                  }
              },
              xAxes: {
                  grid: {
                      color: '#FFFFFF',
                  },
                  ticks:{
                      color: 'white',
                      fontSize: 12,
                  }
              },
          },
        }}
      />
    </div>
    
  )
}

export default Upperright;