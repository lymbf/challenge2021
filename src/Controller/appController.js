import { useState, useEffect } from "react";
import useResultsController from "./resultsController";
import useActivitiesController from "./activitiesController";

const START_DATE = new Date("Mon Feb 01 2021 10:45:12");

export default function useAppController() {
  const { user_activities, error } = useActivitiesController();
  const [relevant_users, setRelevant_users] = useState();
  const [leader, setLeader] = useState();

  const {
    calculateRiding,
    calculateJogging,
    showProgress,
    showLeader,
  } = useResultsController();

  useEffect(() => {
    if (!error && user_activities.length >= 6) {
      const relevant = user_activities.map((user) => {
        let relevant_activities = user.activities.map((activitie) => {
          let activitie_date = new Date(activitie.start_date);
          if (activitie_date > START_DATE) {
            return activitie;
          }
        });
        relevant_activities = relevant_activities.filter(Boolean);

        const jogging = calculateJogging(relevant_activities);
        const riding = calculateRiding(relevant_activities);
        const progress = showProgress(jogging, riding);

        return {
          name: user.name,
          jogging: jogging,
          riding: riding,
          progress: progress,
          activities: relevant_activities
        };
      });
      setLeader(showLeader(relevant));

      setRelevant_users(relevant);
    }
  }, [user_activities, error]);
  return {
    user_stats: relevant_users,
    error: error,
    leader: leader,
    user_activities: user_activities,
  };
}
