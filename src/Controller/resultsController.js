import consts from "../Model/Consts";

export default function useResultsController() {
  const calculateRiding = (instances) => {
    var running_sum = 0;
    if (instances) {
      instances.forEach((inst) => {
        if (inst.workout_type === 10) {
          running_sum += inst.distance;
        }
      });
    }

    running_sum = (running_sum / 1000).toFixed(1);
    if (running_sum >= 250) {
      running_sum = 250;
    }
    return running_sum;
  };

  const calculateJogging = (instances) => {
    var jogg_sum = 0;
    if (instances) {
      instances.forEach((inst) => {
        if (inst.workout_type === 0) {
          jogg_sum += inst.distance;
        }
      });
    }

    jogg_sum = (jogg_sum / 1000).toFixed(1);
    if (jogg_sum >= 100) {
      jogg_sum = 100;
    }
    return jogg_sum;
  };

  const showProgress = (jogging, riding) => {
    var progress = (Math.round(jogging) + (Math.round(riding) / 250) * 100) / 2;

    return progress;
  };

  const showLeader = (data) => {
    let leader = { progress: 0 };
    data.forEach((user) => {
      if (user.progress > leader.progress) {
        leader = user;
      }
    });
    return leader;
  };

  const challengeActivities = (activities) => {

    let result = activities.map((user) => {
      let res = user.activities.map((activitie) => {
        let date = new Date(activitie.start_date);
        if (date > consts.START_DATE) {
          return activitie;
        }
      });
      res = res.filter(Boolean);
      return({name: user.name, activities: res})
    });
    return result
  };

  const ridingActivities = (activities)=>{
        let res = activities.map(activitie=>{
          if(activitie.workout_type === 10){
            return{
              distance: activitie.distance,
              date: new Date(activitie.start_date)
            }
          }
        })
        res = res.filter(Boolean);
        return res.reverse();
  }
  const runningActivities = (activities)=>{
    let res = activities.map(activitie=>{
      if(activitie.workout_type === 0){
        return{
          distance: activitie.distance,
          date: new Date(activitie.start_date)
        }
      }
    })
    res = res.filter(Boolean);
    return res.reverse();
  }
  return {
    calculateRiding,
    calculateJogging,
    showProgress,
    showLeader,
    challengeActivities,
    ridingActivities,
    runningActivities
  };
}
