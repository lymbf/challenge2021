import React from "react";
import "./leader.css";

export default function Leader(props) {
  return (
    <div className="leader">
      <div>{props.leader.name}</div>
      <div>
        <div>
          <div>Progress: </div><div>{props.leader.progress} %</div>
        </div>
        <div>
          <div>Riding: </div><div>{props.leader.riding} Km</div>
        </div>
        <div>
          <div>Jogging: </div><div>{props.leader.jogging} Km</div>
        </div>
      </div>
    </div>
  );
}
