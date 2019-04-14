import React, { Component } from "react";
import "./Ratiodisplay.css";
import utils from "../../utils/utility_methods";

const Ratiotext = () => {
  return (
    <div className="Ratiodisplay-title">
      <h3>GENOTYPIC RATIO</h3>
    </div>
  );
};

class Ratioindicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {}
    };
  }

  prevProps = {};

  componentDidUpdate() {
    if (!utils.objEqual(this.props.genRatio, this.prevProps)) {
      Object.assign(this.prevProps, this.props.genRatio);
      this.enter();
    }
  }

  timerID = 0;

  enter() {
    this.setState({ style: { backgroundColor: "red" } });
    this.timerID = setTimeout(() => this.leave(), 200);
  }
  leave() {
    this.setState({ style: { backgroundColor: "hsl(0, 0%, 83%)" } });
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div style={this.state.style} className="Ratiodisplay-display">
        <h3>{this.props.genRatio["YY"]} YY</h3>
        <h3>:</h3>
        <h3>{this.props.genRatio["Yy"]} Yy</h3>
        <h3>:</h3>
        <h3>{this.props.genRatio["yy"]} yy</h3>
      </div>
    );
  }
}

const Ratiodisplay = props => {
  const ratio = props.genRatio;

  return (
    <div className="Ratiodisplay">
      <Ratiotext />
      <Ratioindicator genRatio={ratio} />
    </div>
  );
};

export default Ratiodisplay;
