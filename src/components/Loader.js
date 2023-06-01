import React from "react";
import "../css/Loader.css";
export default function Loader() {
  return (
    <div className="circular-loader">
      <div className="circular-loader__inner">
        <div className="circular-loader__inner-item"></div>
      </div>
    </div>
  );
}
