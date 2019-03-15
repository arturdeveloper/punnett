import React, { Component } from "react";
import "./BarChart.css";

const Bar = props => {
  let style = {
    backgroundColor: props.color
  };

  if (props.height >= 1) {
    Object.assign(style, { height: `${props.height * 25}%` });
  } else {
    Object.assign(style, { visibility: "hidden" });
  }

  return <div style={style} className="Barchart-bar" />;
};

const Barchart = props => {
  return (
    <div className="Barchart">
      <div className="Barchart-title">
        <h3>PHENOTYPIC RATIO</h3>
      </div>
      <div className="Barchart-external">
        <div className="Barchart-label">
          <h2>4</h2>
          <h2>3</h2>
          <h2>2</h2>
          <h2>1</h2>
        </div>
        <div className="Barchart-container">
          <div className="Barchart-axes" />
          <div className="Barchart-area">
            <Bar height={props.phenRatio[0]} color="#EFCE22" />
            <Bar height={props.phenRatio[1]} color="#65B14F" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barchart;
