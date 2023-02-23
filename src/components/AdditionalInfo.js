import React from "react";
import "./AdditionalInfo.css";

export default function AdditionalInfo({ logo, info, visibility }) {
  return (
    <div className={`info-wrapper ${visibility}`}>
      <img src={logo} alt="location-icon" />
      <h4>{info}</h4>
    </div>
  );
}
