import React, { useState } from "react";

const FormHooksAdvanced = () => {
  const [username, setUsername] = useState("React Hooks");
  const [message, setMessage] = useState("Welcome to learn React Hooks");

  //   const changeMessage = (event) => {
  //     setMessage(event.target.value);
  //   };

  //   const changeUsername = (event) => {
  //     setUsername(event.target.value);
  //   };

  const change = (event, key) => {
    // console.log(event.target.value);

    if (key === "username") setUsername(event.target.value);
    if (key === "message") setMessage(event.target.value);
  };

  return (
    <div>
      <h1>Form Hooks Advanced</h1>
      <h2>The Message is: </h2>
      <span>{message}</span>
      <h3>The message sent by: </h3>
      <span>{username}</span>

      <form>
        <input
          type="text"
          //   onChange={(event) => setMessage(event.target.value)}
          //   onChange={changeMessage}
          onChange={(event) => change(event, "message")}
          placeholder="Type Your message here..."
        />
        <input
          type="text"
          //   onChange={(e) => setUsername(e.target.value)}
          //   onChange={changeUsername}
          onChange={(event) => change(event, "username")}
          placeholder="The Message sent by..."
        />
      </form>
    </div>
  );
};

export default FormHooksAdvanced;
