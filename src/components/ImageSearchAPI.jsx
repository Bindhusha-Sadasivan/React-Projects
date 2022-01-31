import React from "react";
import axios from "axios";

class ImageSearchAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: "", imagesFound: [] };
  }
  // componentDidMount() {
  //   //     axios
  //   //       .get(
  //   //         "http://api.unsplash.com/search/photos?client_id=-A8uCjYtpoVHBJdnhBr3k9yRKb5U8xqN5VzrhObcSBg&query=india"
  //   //       )
  //   //       //   .then((response) => console.log(response))
  //   //       //   .then((response) => console.log(response.data))
  //   //       //   .then((response) => console.log(response.data.results[0]))
  //   //       .catch((error) => console.log("ERROR", error));

  //   axios
  //     .get(
  //       "http://api.unsplash.com/search/photos?client_id=-A8uCjYtpoVHBJdnhBr3k9yRKb5U8xqN5VzrhObcSBg&query=india"
  //     )
  //     .then((response) => this.setState({ imagesFound: response.data.results }))
  //     .catch((error) => console.log("ERROR MESSAGE", error));
  // }

  callUnsplashAPI = (searchText) => {
    // axios
    //   .get(
    //     "http://api.unsplash.com/search/photos?client_id=-A8uCjYtpoVHBJdnhBr3k9yRKb5U8xqN5VzrhObcSBg&query=" +
    //       searchText
    //   )
    //   .then((response) => this.setState({ imagesFound: response.data.results }))
    //   .catch((error) => console.log("ERROR MESSAGE", error));

    const url =
      "http://api.unsplash.com/search/photos?client_id=-A8uCjYtpoVHBJdnhBr3k9yRKb5U8xqN5VzrhObcSBg&query=";
    axios
      .get(url + searchText)
      .then((response) => this.setState({ imagesFound: response.data.results }))
      .catch((error) => console.log("ERROR MESSAGE", error));
  };

  handleChange = (event) => {
    // console.log("EVENT HANDLED", event);

    this.setState({ searchQuery: event.target.value });
    // console.log(this.state.searchQuery);
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.callUnsplashAPI(this.state.searchQuery);
  };

  render() {
    return (
      <div>
        <h1>Your Image Search Engine</h1>
        <form onSubmit={this.handleSubmit}>
          {/* <form onSubmit={this.callUnsplashAPI(this.state.searchQuery)}> */}
          <input
            type="text"
            placeholder="Enter the text..."
            onChange={this.handleChange}
          />
          <input type="submit" value="search" />
        </form>
        {this.state.imagesFound.map((item) => (
          <img key={item} src={item.urls.small} alt="Unsplash Images"></img>
        ))}
      </div>
    );
  }
}

export default ImageSearchAPI;
