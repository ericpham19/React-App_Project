import React from "react";
import UseAxios from "../hooks/Axios";
import { useParams } from "react-router-dom";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
  );
  
const Chart = () => {
  const { id } = useParams();
  const { response } = UseAxios(
    `coins/${id}/market_chart?vs_currency=usd&days=max&interval=daily`
  );


  if (!response) {
    return <div>Loading</div>;
  }

  const chartData = response.prices.map(value => ({x: value[0], y: value[1]}));
    console.log(chartData)


  const options = {
    responsive: true,
   
  };

  const data= {
    labels: ["Jan", "Feb", "March"],
    datasets: [
        {
            fill: true,
            label: id,
            data: ["10", "20", "30"],
            borderColor: "rgb(31, 81, 255)",
            backgroundColor: "rgb(0, 150, 255)"
        }
    ]

  }

  return (
   <Line options= {options} data={data} />
  );
};

export default Chart;
