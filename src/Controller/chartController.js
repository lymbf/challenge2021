import { useState } from "react";
import useResultsController from "./resultsController";

const useChartController = (activities, label) => {
  const {
    challengeActivities,
    ridingActivities,
    runningActivities,
  } = useResultsController();
  

  const riding_activities = ridingActivities(activities);
  const running_activities = runningActivities(activities);

  const getChartData = (activities, label) => {
    let distance = 0;
    const data = activities.map((activitie) => {
      distance += activitie.distance / 1000;
      return {
        x: activitie.date,
        y: distance.toFixed(1),
      };
    });
    const chartData = {
      datasets: [
        {
          label: label,
          backgroundColor: "rgba(255, 166, 0, 0.418)",
          borderWidth: 1,
          borderColor: "rgba(255,255,255,1)",
          data: data,
        },
      ],
    };
    return chartData
  };

  let chartData
  let stepsize;
  let max;
  if (label === "Jogging") {
    chartData = getChartData(running_activities, label);
    stepsize = 20;
    max = 100;
  } else {
    chartData = getChartData(riding_activities, label);
    stepsize = 50;
    max = 250;
  }
  return { chartData: chartData, stepsize: stepsize, max: max};
};

export default useChartController
