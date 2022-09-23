import React from 'react'
// import logo from './logo.svg';
import './App.css';
import AreaChart from './charts/AreaChart';
import Doughnut from './charts/DoughnutChart';

function App() {
  return (
    <div className="App">
      <Doughnut/>
      <AreaChart/>
    </div>
  );
}

export default App;
