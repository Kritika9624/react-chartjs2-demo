import React, { useState } from "react";
// import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts/highstock";
import Chart from "../components/HCChart";

const chartOptions = {
  title: {
    text: "",
  },
  series: [
    {
      data: [1, 2, 3],
    },
  ],
};

function HCLineChart() {
  const [options, setOptions] = useState({
    series: chartOptions.series,
  });

  function onClick() {
    setOptions({
      series: [
        {
          data: [1, 2, 3],
        },
        {
          data: [2, 3, 1],
        },
        {
          data: [3, 2, 1],
        },
      ],
    });
  }
  return (
    <div>
      <h2>Highcharts</h2>
      <Chart options={options} highcharts={Highcharts} />
      <button onClick={onClick}>Update Series</button>
    </div>
  );
}

export default HCLineChart;
