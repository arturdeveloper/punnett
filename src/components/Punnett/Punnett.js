import React, { Component } from "react";
import "./Punnett.css";
import green_pea from "../../assets/green_pea.svg";
import yellow_pea from "../../assets/yellow_pea.svg";

function Square(props) {
  let shape = props.big === "big" ? "bigsquare" : "smallsquare";
  let coloring = props.value === "yy" ? green_pea : yellow_pea;
  let selectFlag = props.selected ? "selected" : "";

  let compClass = `${shape} ${selectFlag}`;

  return (
    <div className={compClass} onClick={props.onClick}>
      <img src={coloring} />
      <h3>{props.value} </h3>
    </div>
  );
}

class Diagram extends Component {
  renderSquare(i, size = "small") {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        selected={this.props.cross.includes(i)}
        big={size}
      />
    );
  }
  render() {
    return (
      <div className="Punnett">
        <h2 className="Punnett-header">
          Select two pea plant genotypes to cross.
        </h2>
        <div className="diagram-container">
          <div className="diagram-row row1">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="diagram-text row1">
            <h3>Y</h3>
            <h3>y</h3>
          </div>
          <div className="diagram-row row2">
            <div className="diagram-column column1">
              {this.renderSquare(3)}
              {this.renderSquare(4)}
              {this.renderSquare(5)}
            </div>
            <div className="diagram-column diagram-text column2">
              <h3>Y</h3>
              <h3>y</h3>
            </div>

            <div className="diagram-column column3">
              <div className="diagram-row column4">
                {this.renderSquare(6, "big")}
                {this.renderSquare(7, "big")}
              </div>
              <div className="diagram-row column4">
                {this.renderSquare(8, "big")}
                {this.renderSquare(9, "big")}
              </div>
            </div>
          </div>
        </div>
        <div className="row3" />
      </div>
    );
  }
}

class Punnett extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plants: ["YY", "Yy", "yy", "YY", "Yy", "yy", "YY", "Yy", "Yy", "yy"],
      selected: [0, 3, 6]
    };
  }
  handleClick(i) {
    let currentSelections = this.state.selected;
    if (i >= 0 && i <= 2) {
      currentSelections[0] = i;
    }
    if (i >= 3 && i <= 5) {
      currentSelections[1] = i;
    }

    let plants = this.state.plants;
    let firstCross = plants[currentSelections[0]];
    let secondCross = plants[currentSelections[1]];

    let newOffspring = calculateOffspring(firstCross, secondCross);
    currentSelections[2] = plants.indexOf(newOffspring, 6);

    this.setState({
      selected: currentSelections
    });

    let ratios = calculateRatios(firstCross, secondCross);

    this.props.onChange(ratios);
  }
  render() {
    const { plants, selected } = this.state;
    return (
      <Diagram
        cross={selected}
        squares={plants}
        onClick={i => this.handleClick(i)}
      />
    );
  }
}

const calculateRatios = (firstCross, secondCross) => {
  let genRatio = calculatePossibleOffsprings(firstCross, secondCross);

  let phenRatio = calculatePhenRatio(genRatio);
  return { phenRatio, genRatio };
};

const calculateOffspring = (firstCross, secondCross) => {
  let newOffspring = firstCross[randomFlip()] + secondCross[randomFlip()];
  newOffspring = newOffspring === "yY" ? "Yy" : newOffspring;

  return newOffspring;
};

const calculatePhenRatio = genRatio => {
  let ratio = [0, 0];
  for (const type in genRatio) {
    if (genRatio.hasOwnProperty(type)) {
      if (type !== "yy") {
        ratio[0] += genRatio[type];
      } else {
        ratio[1] += genRatio[type];
      }
    }
  }
  return ratio;
};

const calculatePossibleOffsprings = (first, second) => {
  let offsprings = {};
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      let outcome = first[i] + second[j];
      outcome = outcome === "yY" ? "Yy" : outcome;
      if (offsprings[outcome]) {
        offsprings[outcome] += 1;
      } else {
        offsprings[outcome] = 1;
      }
    }
  }

  ["YY", "Yy", "yy"].forEach(c => {
    if (!offsprings[c]) {
      offsprings[c] = 0;
    }
  });

  return offsprings;
};

const randomFlip = () => {
  return Math.floor(Math.random() * 2);
};

export default Punnett;
