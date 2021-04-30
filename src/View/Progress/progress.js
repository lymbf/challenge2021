import React from "react";
import "./progress.css";

export default function Progress({ user_stats }) {
  return (
    <div className="progress">
      {user_stats.map((user) => {
        return (
          <div className="progress-user">
            <div>
                <div>{user.name}</div>
                <div>
                    <div>Progress: </div><div>{user.progress} %</div>
                </div>
                <div>
                    <div>Riding: </div><div>{user.riding} Km</div>
                </div>
                <div>
                    <div>Jogging: </div><div>{user.jogging} Km</div>
                </div>
            </div>
            <div></div>
          </div>
        );
      })}
    </div>
  );
}
