import React from "react";
import ReactDOM from "react-dom";
import "./enlarged.css";

import Chart from "../Assets/chart";

export default function Enlarged({ chart }) {
  return ReactDOM.createPortal(
    <div className="enlarged">
      <Chart
        chart={chart}
      />
    </div>,
    document.getElementById("chart")
  );
}
