import React, { Component } from "react";
import "./Ratiodisplay.css";

const Ratiodisplay = props => {
  const ratio = props.genRatio;

  return (
    <div className="Ratiodisplay">
      <div className="Ratiodisplay-title">
        <h3>GENOTYPIC RATIO</h3>
      </div>
      <div className="Ratiodisplay-display">
        <h3>{ratio["YY"]} YY</h3>
        <h3>:</h3>
        <h3>{ratio["Yy"]} Yy</h3>
        <h3>:</h3>
        <h3>{ratio["yy"]} yy</h3>
      </div>
    </div>
  );
};

export default Ratiodisplay;
