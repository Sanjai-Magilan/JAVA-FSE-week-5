import React, { Component } from "react";

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rupees: "",
      euro: "",
    };
  }

  handleSubmit = () => {
     const euro = (this.state.rupees / 109.88).toFixed(2);
    alert("converted amount is "+euro);
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>

        <input
          type="number"
          placeholder="Enter Rupees"
          value={this.state.rupees}
          onChange={(event) =>
            this.setState({
              rupees: event.target.value,
            })
          }
        />

        <br />
        <br />

        <button onClick={this.handleSubmit}>Convert</button>

      </div>
    );
  }
}

export default CurrencyConvertor;
