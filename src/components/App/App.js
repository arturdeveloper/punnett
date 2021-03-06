import React, { Component } from "react";
import "./App.css";
import "../Punnett/Punnett";
import Punnett from "../Punnett/Punnett";
import Barchart from "../BarChart/BarChart";
import Ratiodisplay from "../RatioDisplay/Ratiodisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { phenRatio: [4, 0], genRatio: { YY: 4, Yy: 0, yy: 0 } };
  }

  handleEvent = ratios => {
    this.setState({ phenRatio: ratios.phenRatio, genRatio: ratios.genRatio });
  };

  render() {
    const { phenRatio, genRatio } = this.state;
    return (
      <div className="App">
        <header className="App-header" />
        <div className="App-container-1">
          <div className="App-logo">
            <div>
              <h3>Logo</h3> <h4 className="separator">|</h4>{" "}
              <h4> Mendellian Inheritance</h4>
            </div>
          </div>
          <Punnett onChange={this.handleEvent} />
        </div>
        <div className="App-container-2">
          <div className="container2-header" />
          <div className="container2-content">
            <Barchart phenRatio={phenRatio} />
          </div>
          <div className="container2-filler" />
          <div className="container2-content">
            <Ratiodisplay genRatio={genRatio} />
          </div>
          <div className="container2-footer" />
        </div>
      </div>
    );
  }
}

export default App;
