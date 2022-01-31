import React from "react";
import axios from "axios";

class OpenWeatherAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchCity: "", weatherFound: [] };
  }

  //   componentDidMount = () => {
  //     axios
  //       .get(
  //         "http://api.openweathermap.org/data/2.5/weather?q=London&appid=c8654bb2d70d9caf2fcfab989eb732af"
  //       )
  //       //   .then((response) => console.log(response))
  //       //   .then((response) => console.log("RESPONSE", response.data))
  //       //   .then((response) => console.log("RESPONSE", response.data.main.temp))
  //       .then((response) => this.setState({ weatherFound: response.data.main }))
  //       .catch((error) => console.log("ERROR MESSAGE", error));
  //   };

  callWeatherAPI = (searchCity) => {
    axios
      .get(
        "http://api.openweathermap.org/data/2.5/weather?q=" +
          searchCity +
          "&appid=c8654bb2d70d9caf2fcfab989eb732af"
      )
      .then((response) => this.setState({ weatherFound: response.data.main }))
      .catch((error) => console.log("ERROR MESSAGE", error));
  };

  handleChange = (event) => {
    // console.log("HANDLE CHANGE EVENT CLICKED", event);
    this.setState({ searchCity: event.target.value });
    // console.log("EVENET VALUE", event.target.value);
  };

  handleSubmit = (event) => {
    // console.log("HANDLE SUBMIT CLICKED", event);

    event.preventDefault();

    this.callWeatherAPI(this.state.searchCity);
  };

  render() {
    // console.log(this.state.weatherFound);
    return (
      <div>
        <h1>The Weather Application</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter the City name..."
            onChange={this.handleChange}
          ></input>
          <input type="submit" value="Search"></input>
        </form>

        {Object.entries(this.state.weatherFound).map((entry) => (
          <h2 key={entry}>{entry}</h2>
        ))}
      </div>
    );
  }
}

export default OpenWeatherAPI;
