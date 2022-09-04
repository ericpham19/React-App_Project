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
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";
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
    `coins/${id}/market_chart?vs_currency=usd&days=360&interval=daily`
  );

  if (!response) {
    return <div>Loading</div>;
  }

  const chartData = response.prices.map((value) => ({
    x: value[0],
    y: value[1],
  }));

  const options = {
    responsive: true,
  };

  const data = {
    labels: chartData.map((value) => moment(value.x).format("MMM, DD")),
    datasets: [
      {
        fill: true,
        label: id,
        data: chartData.map((value) => value.y),
        borderColor: "rgb(135,206,250)",
        backgroundColor: " rgb(240,248,255)",
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
