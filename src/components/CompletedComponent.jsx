import React from "react";

class CompletedComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>The Completed Tasks are</h2>
        {this.props.itemsCompleted.map((item) => (
          <div>
            <h3>{item.title}</h3>
            <button>Delete Forever</button>
          </div>
        ))}
      </div>
    );
  }
}

export default CompletedComponent;
