import React from "react";
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "CTS",
      package: "6.5lpa",
    };
  }
  render() {
    return (
      <div>
        <h1>
          FIRST CLASS COMPONENT {this.props.fname} {this.props.reg}
          {this.props.cgpa}
        </h1>
        <h2>{this.state.company}</h2>
        <h3>{this.state.package}</h3>
      </div>
    );
  }
}

export default ClassComponent;
