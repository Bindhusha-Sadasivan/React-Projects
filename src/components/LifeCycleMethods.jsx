import React from "react";

class LifeCycleMethods extends React.Component {
  constructor(props) {
    super(props);
    this.state = { message: "This is the initial message" };
  }

  //   changeMessage = () => {
  //     setTimeout(() => {
  //       this.setState({ message: "This is the Updated Message" });
  //     }, 5000);
  //   };

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ message: "This is the Updated Message" });
    }, 5000);
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <h2>{this.changeMessage()}</h2> */}
      </div>
    );
  }
}

export default LifeCycleMethods;
