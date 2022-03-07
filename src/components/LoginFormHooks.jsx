import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginFormHooks = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);

  const history = useNavigate();

  const change = (event, key) => {
    if (key === "username") {
      setUsername(event.target.value);
    } else if (key === "password") {
      setPassword(event.target.value);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    // axios
    //   .post("http://localhost:3000/signin", {
    //     email: username,
    //     password: password,
    //   })
    //   .then((response) => console.log(response))
    //   .catch((error) => console.log(error));

    axios
      .post("http://localhost:3000/signin", {
        email: username,
        password: password,
      })
      .then((response) => setStatus(response.data.status))
      .catch((error) => console.log(error));

    // if (status) {
    //   history("/search");
    // }
  };

  const handleNavigate = () => {
    history("/search");
  };

  return (
    <div>
      {/* {
        <div>
          <h1>{username}</h1>
          <h2>{password}</h2>
        </div>
      } */}
      {/* <form onSubmit={(event) => handleLogin(event)}> */}
      <form>
        <input
          type="text"
          placeholder="Enter your Username..."
          onChange={(event) => change(event, "username")}
        />
        <input
          type="text"
          placeholder="Enter your Password..."
          onChange={(event) => change(event, "password")}
        />
        {/* <input type="submit" value="Login" /> */}
        <button onClick={(event) => handleLogin(event)}>Login</button>
      </form>

      {status ? (
        handleNavigate()
      ) : (
        <>
          <h1>Hi</h1>
        </>
      )}
    </div>
  );
};

export default LoginFormHooks;
