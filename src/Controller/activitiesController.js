import { useState, useEffect } from "react";
import usersModel from "../Model/usersModel";
import getAccess from "./accessController";

export default function useActivitiesController() {
  const { activities_url, users } = usersModel;

  const [error, setError] = useState(false);
  const [user_activities, setUser_activities] = useState([]);

  useEffect(() => {
    users.map(async (user) => {
      const res = await getAccess(user.access_url, user.header);
      if (!res.error) {
        const { access_token, access_header } = res;
        const url = activities_url + access_token.toString();
        try {
          const res = await fetch(url, {
            method: "GET",
            headers: {
              Authorization: access_header,
            },
          });
          const activities = await res.json();
          if (activities.errors) {
            throw new Error(activities.errors[0].code);
          } else {
            setUser_activities((user_activities) => {
              return [
                ...user_activities,
                { name: user.name, activities: activities },
              ];
            });
          }
        } catch (err) {
          setError({ error: true, message: err.message });
        }
      } else {
          setError({error: true, message: res.error.message})
      }
    });
    setError(false);
  }, [users, activities_url]);
 return {user_activities, error}
}
