import React from "react";

class CounterComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      deliveryOption: true,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };
  showDeliveryOption = () => {
    this.setState({
      deliveryOption: this.state.deliveryOption
        ? "Express Delivery"
        : "Normal Delivery",
    });
  };
  toggleDeliveryOption = () => {
    this.setState({
      deliveryOption: this.state.deliveryOption
        ? "Normal Delivery"
        : "Express Delivery",
    });
  };
  render() {
    return (
      <div>
        <h1>Counter Componenent</h1>
        <img src={this.props.imgSource} alt="Star" />
        <br />
        <a href={this.props.buyLink}>Click here to buy</a>
        <br />
        <h2>{this.props.price}</h2>
        <button onClick={this.increment}>+</button>
        {this.state.count}
        <button onClick={this.decrement}>-</button>
        <br />
        <br />
        <button
          onClick={this.showDeliveryOption}
          onDoubleClick={this.toggleDeliveryOption}
        >
          Delivery Option
        </button>

        <h3>{this.state.deliveryOption}</h3>
      </div>
    );
  }
}

export default CounterComponent;
