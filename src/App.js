import React, { useState } from 'react';
import './App.css';
import Upperleft from './components/upperleft/upperleft';
import Upperright from './components/upperright/upperright';
import Bottomleft from './components/bottomleft/bottomleft';
import Bottomright from './components/bottomright/bottomright';

function App() {
  const [country, setCountry] = useState(null);

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
          />
        </div>
        <div class="App-div3">
          <Upperright
            country={country}
          />
        </div>
        <div class="App-div4">
          <Bottomright
            country={country}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
