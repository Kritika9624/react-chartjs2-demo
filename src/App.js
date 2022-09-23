import React from 'react'
// import logo from './logo.svg';
import './App.css';
import AreaChart from './charts/AreaChart';
import Doughnut from './charts/DoughnutChart';
import HCLineChart from './charts/HCLineChart';

function App() {
  return (
    <div className="App">
      <Doughnut/>
      <AreaChart/>
      <HCLineChart/>
    </div>
  );
}

export default App;
