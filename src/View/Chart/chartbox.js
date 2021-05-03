import React, { useState } from "react";
import "./chartbox.css";

import Enlarged from "./enlarged";
import Chart from "../Assets/chart";
import Shadow from "../Assets/shadow";
import useChartController from "../../Controller/chartController";

export default function Chartbox(props) {
  const [type, setType] = useState("Jogging");
  const [enlarged, setEnlarged] = useState(false);
  const { chartData, stepsize, max } = useChartController(
    props.activities,
    type
  );
  console.log(chartData);
  return (
    <div className="chartbox">
      <div>
        <div
          onClick={() => {
            setType("Jogging");
          }}
        >
          Jogging
        </div>
        <div
          onClick={() => {
            setType("Riding");
          }}
        >
          Riding
        </div>
        <div
          onClick={() => {
            setEnlarged(true);
          }}
        >
          View
        </div>
      </div>
      <div>
        <Chart
          chart={{
            data: chartData,
            stepsize: stepsize,
            max: max,
          }}
        />
      </div>
      {enlarged && (
        <Enlarged
          chart={{
            data: chartData,
            stepsize: stepsize,
            max: max,
          }}
        />
      )}
      {enlarged && <Shadow setEnlarged={setEnlarged} />}
    </div>
  );
}
