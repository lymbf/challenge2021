import React from "react";
import "./modal.css";

export default function Modal(props) {
  return (
    <div className={`modal ${props.class}`}>
      <div className="modal-header">{props.header}</div>
      <div className = 'modal-content'>{props.children}</div>
    </div>
  );
}
