import React from "react";

class DataList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialValue: 1,
    };
  }
  changeCount = () => {
    this.setState({ initialValue: this.state.initialValue + 1 });
  };
  render() {
    return (
      <div>
        <h1>Matrix</h1>

        <select onChange={this.changeCount} name="count" id="countSelect">
          {/* <option>{this.state.initialValue}</option> */}
          {this.state.initialValue.map((item) => (
            <option value="">{item.initialValue}</option>
          ))}
        </select>
      </div>
    );
  }
}

export default DataList;
