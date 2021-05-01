import React from "react";
import { Line } from "react-chartjs-2";

export default function Chart(props) {
  console.log(props.chart);
  return (
    <Line
      data={props.chart.data}
      options={{
        scales: {
          yAxes: [
            {
              display: true,
              ticks: {
                min: 0,
                stepSize: props.chart.stepSize,
                max: props.chart.max,
              },
              gridLines: {
                display: true,
                color: "rgba(255,255,255,1)",
                lineWidth: 0.2,
              },
            },
          ],
          xAxes: [
            {
              
              type: "time",
              distribution: "linear",
              ticks: {
                max: new Date(),
              },
              time: {
                unit: "day",
              },
              gridLines: {
                display: true,
                color: "rgba(255,255,255,1)",
                lineWidth: 0.2,
              },
            },
          ],
        },
      }}
    />
  );
}
