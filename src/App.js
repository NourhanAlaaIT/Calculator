import React, { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import ClearButton from "./components/ClearButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      operators: ["/", "*", "-", "+"],
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: ""
    };
  }
  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  addZeroToInput = val => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  addDecimal = val => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };
  subtract = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "subtract";
  };
  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };
  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };
  equal = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator === "plus") {
      this.setState({
        input: parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input: parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input: parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input: parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
      });
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input>{this.state.input}</Input>
          <div className="row">
            {this.state.numbers.map(number => {
              if (number >= 7) {
                return <Button handleClick={this.addToInput}>{number}</Button>;
              }
            })}
            {this.state.operators.map(operator => {
              if (operator === "/") {
                return <Button handleClick={this.divide}>{operator}</Button>;
              }
            })}
          </div>
          <div className="row">
            {this.state.numbers.map(number => {
              if (number >= 4 && number < 7) {
                return <Button handleClick={this.addToInput}>{number}</Button>;
              }
            })}
            {this.state.operators.map(operator => {
              if (operator === "*") {
                return <Button handleClick={this.multiply}>{operator}</Button>;
              }
            })}
          </div>
          <div className="row">
            {this.state.numbers.map(number => {
              if (number >= 1 && number < 4) {
                return <Button handleClick={this.addToInput}>{number}</Button>;
              }
            })}
            {this.state.operators.map(operator => {
              if (operator === "+") {
                return <Button handleClick={this.add}>{operator}</Button>;
              }
            })}
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.equal}>=</Button>
            <Button handleClick={this.subtract}>-</Button>
          </div>
          <div className="row">
            <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
