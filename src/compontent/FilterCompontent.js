import React, { Component } from "react";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import "../index.css";
class FilterCompontent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: { min: 10, max: 5000 },
    };
  }

  render() {
    return (
      <InputRange
        maxValue={10000}
        minValue={10}
        value={this.state.value}
        onChange={(value) => this.setState({ value })}
      />
    );
  }
}

export default FilterCompontent;
