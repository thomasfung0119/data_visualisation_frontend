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

function Upperright(props) {
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
  const [lineData1, setLineData1] = useState([400, 300, 350, 200, 280]);
  const [lineData2, setLineData2] = useState([300, 400, 350, 100, 220]);
  const [scatterData1, setScatterData1] = useState([{x: -10, y: 0}, {x: 0, y: 10}, {x: 10, y: 5}, {x: 0.5, y: 5.5}]);
  const [scatterData2, setScatterData2] = useState([{x: -2, y: 0}, {x: 3, y: 10}, {x: 10, y: 6}, {x: 1.5, y: 5.5}]);

  // PRNG using country name
  useEffect(() => {
    const { country } = props;
    // seed = sum of first 4 character of the name of country
    let next = country.charCodeAt(0) + country.charCodeAt(1) + country.charCodeAt(2) + country.charCodeAt(3);
    // generate line data
    const line1 = [];
    const line2 = [];
    for (let i = 0; i < 10; i++) {
      next = randNext(next);
      (i < 5) ? line1.push(Math.abs(next % 100)*10) : line2.push(Math.abs(next % 100)*10);
    }
    setLineData1(line1);
    setLineData2(line2);

    const pt1 = [];
    const pt2 = [];
    for (let i = 0; i < 10; i++) {
      let point = {x: 0, y: 0};
      next = randNext(next);
      point.x = ((next % 1000) / 100);
      next = randNext(next);
      point.y = ((next % 1000) / 100);
      (i < 5) ? pt1.push(point) : pt2.push(point);
    }
    setScatterData1(pt1);
    setScatterData2(pt2);
  }, [props.country])
  
  // the main operation for PRNG
  const randNext = (num) => {
    num ^= num << 13;
    num ^= num >> 17;
    num ^= num << 5;
    return num;
  }
  
  const line_data = {
    labels: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"],
    datasets: [
      {
        fill: false,
        label: "Item1",
        data: lineData1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }, 
      {
        fill: false,
        label: "Item2",
        data: lineData2,
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
        data: lineData1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }, 
      {
        fill: true,
        label: "Item2",
        data: lineData2,
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
        data: scatterData1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }, 
      {
        fill: true,
        label: "Item2",
        data: scatterData2,
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
        data: lineData1,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }, 
      {
        label: "Item2",
        data: lineData2,
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
        yAxes:{
            grid: {
                color: 'grey',
            },
            ticks:{
                color: 'white',
                fontSize: 12,
            },
        },
        xAxes: {
            grid: {
                color: 'grey',
            },
            ticks:{
                color: 'white',
                fontSize: 12,
            }
        },
    },
  }

  switch (menu){
    case 'Line Chart':
      return (
        <div className="upperright">
          <div class = "title">
            <h1>{menu} of {props.country}</h1>
            <Dropdown 
              menu = {menu}
              setMenu = {setMenu}
            />
          </div>
          
          <Line
            data= {line_data}
            options= {options}
          />
        </div>
      )
    case 'Area Chart':
      return (
        <div className="upperright">
          <div class = "title">
            <h1>{menu} of {props.country}</h1>
            <Dropdown 
              menu = {menu}
              setMenu = {setMenu}
            />
          </div>
          <Line
            data= {area_data}
            options= {options}
          />
        </div>
      )
    case 'Scatter Chart':
      return (
        <div className="upperright">
          <div class = "title">
            <h1>{menu} of {props.country}</h1>
            <Dropdown 
              menu = {menu}
              setMenu = {setMenu}
            />
          </div>
          <Scatter
            data= {scatter_data}
            options= {options}
          />
        </div>
      )
    case 'Bar Chart':
      return (
        <div className="upperright">
          <div class = "title">
            <h1>{menu} of {props.country}</h1>
            <Dropdown 
              menu = {menu}
              setMenu = {setMenu}
            />
          </div>
          <Bar
            data= {bar_data}
            options= {options}
          />
        </div>
      )
    default:
      return (<h1>Unknown Chart</h1>)
  }
  
}

export default Upperright;
