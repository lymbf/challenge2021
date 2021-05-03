import React from "react";
import "./shadow.css";
import ReactDOM from "react-dom";

export default function Shadow({ setEnlarged }) {
  const onClick = () => {
    setEnlarged(false);
  };

  return ReactDOM.createPortal(
    <div className="shadow" onClick={onClick}></div>,
    document.getElementById("chart")
  );
}
