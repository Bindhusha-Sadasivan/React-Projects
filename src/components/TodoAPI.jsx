import React from "react";
import axios from "axios";

class TodoAPI extends React.Component {
  constructor(props) {
    super();
    this.state = { todos: [], message: false };
  }

  //   componentDidMount() {
  // fetch("https://jsonplaceholder.typicode.com/posts").then(
  //   (response) => console.log(response)

  // fetch("https://jsonplaceholder.typicode.com/posts").then((response) =>
  //   console.log(response.json())

  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => {
  //         response.json();
  //       })
  //       .then((data) => {
  //         this.setState({ todos: data });
  //         console.log(this.state.todos);
  //       });
  //   }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // }

  // fetchData = () => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => this.setState({ todos: data }));
  // };

  // componentDidMount() {
  //   // axios
  //   //   .get("shttps://jsonplaceholder.typicode.com/posts")
  //   //   .then((result) => console.log("RESULT", result))
  //   //   // .then((result) => console.log("RESULT", result.data[1]))
  //   //   // .then((result) => console.log("RESULT", result.data))
  //   //   .catch((error) => console.log("ERROR", error));

  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((result) => this.setState({ todos: result.data }))
  //     .catch((error) => console.log("ERROR", error));
  // }

  fetchData = () => {
    axios
      // .get("shttps://jsonplaceholder.typicode.com/posts")
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((result) => this.setState({ todos: result.data }))
      // .catch((error) => console.log("ERROR", error));
      .catch((error) => this.setState({ message: error }));
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div>
        <h1>The todo items fetched from REST API:</h1>

        <button onClick={this.fetchData}>Search Data </button>

        {this.state.message ? (
          <h4>Some error occured!!!</h4>
        ) : (
          this.state.todos.map((item) => (
            <div>
              <h2 key={item.id}>{item.title}</h2>
              <h3 key={item.userId}>{item.body}</h3>
            </div>
          ))
        )}
      </div>
    );
  }
}

export default TodoAPI;
