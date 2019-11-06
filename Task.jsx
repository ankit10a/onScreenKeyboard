import React, { Component } from "react";
import { tsImportEqualsDeclaration } from "@babel/types";

class Alphabet extends Component {
  state = {
    categorybtn: ["Uppercase", "Lowercase", "Digits", "Special"],
    button: [
      [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z"
      ],
      [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z"
      ],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      ["@", "#", "$", "%", "^", "&", "*", "(", ")"]
    ],
    click: -1,
    exp: ""
  };
  handleClick = event => {
    let index = this.state.categorybtn.findIndex(l => l === event);
    this.setState({ click: index });
  };
  handleinput = val => {
    this.setState({ exp: this.state.exp + val });
  };
  render() {
    return (
      <div className="container">
        <div className="col-6 text-center">
          {this.state.categorybtn.map(n => (
            <button
              className="btn btn-primary m-2"
              key={n}
              onClick={() => this.handleClick(n)}
            >
              {n}
            </button>
          ))}
        </div>
        <h4 className="col-6 border">
          Text: {this.state.click < 0 ? "" : this.state.exp}
        </h4>

        {this.state.click < 0 ? (
          ""
        ) : (
          <div className="col-6">
            {this.state.button[this.state.click].map(alpha => (
              <button
                key={alpha}
                className="btn btn-dark border"
                onClick={() => this.handleinput(alpha)}
              >
                {alpha}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Alphabet;
