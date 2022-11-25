import React, { useEffect, useState } from 'react';
import './App.css';
import Upperleft from './components/upperleft/upperleft';
import Upperright from './components/upperright/upperright';
import Bottomleft from './components/bottomleft/bottomleft';
import Bottomright from './components/bottomright/bottomright';

function App() {
  const [country, setCountry] = useState(null);
  const [data, setData] = useState(null);
  const [confirmedCaseData, setConfirmedCaseData] = useState(null);

  const fetchData = async () => {
    const res = await fetch("http://localhost:5000/api/getAll");
    const json = await res.json();
    setData(json);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div class="App-parent">
        <div class="App-div1">
          <Upperleft
            country={country}
          />
        </div>
        <div class="App-div2">
          <Bottomleft
            country={country}
            setCountry={setCountry}
            data={data}
          />
        </div>
        <div class="App-div3">
          <Upperright
            country={country}
            setConfirmedCaseData={setConfirmedCaseData}
          />
        </div>
        <div class="App-div4">
          <Bottomright
            country={country}
            confirmedCaseData={confirmedCaseData}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
