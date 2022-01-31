import React from "react";
import { useState } from "react";

const HooksExample = () => {
  const [message, setMessage] = useState("You are logged In...");
  const [loggedIn, setLoggedIn] = useState(true);

  const changeMessage = () => {
    setMessage("Welcome to the Home Page");
  };

  const changeLogIn = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn ? <h1>{message}</h1> : <h2>Please Login Again!!!</h2>}

      <button onClick={changeMessage}>Change Message</button>

      <button onClick={changeLogIn}>Change Login Status</button>
    </div>
  );
};
export default HooksExample;
