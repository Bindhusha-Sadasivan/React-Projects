import React, { useState, useEffect } from "react";

const HooksLifeCycle = (props) => {
  const [username, setusername] = useState("Written by Admin");
  const [message, setmessage] = useState("Initial Message");
  useEffect(() => {
    console.log("test");
    // setmessage("Initial Message");
    setmessage(props.message);
    setusername(props.username);
  }, [props.username, props.message]);

  // const handleChangeMessage = () => {
  //   setmessage("Welcome to React Hooks!!!");
  // };

  // const handleChangeUsername = () => {
  //   setusername("Written by Bindhusha");
  // };

  // const handleOnChangeMessage = (event) => {
  //   setmessage(event.target.value);
  // };

  // const handleOnChangeUsername = (event) => {
  //   setusername(event.target.value);
  // };

  return (
    <div>
      {/* <h2>Name:{username}</h2>
      <h2>Message:{message}</h2>
      <button onClick={handleChangeMessage}>Change Message</button>
      <button onClick={handleChangeUsername}>Change Username</button> */}

      {/* <form>
        <input
          type="text"
          // onChange={handleOnChangeUsername}
          placeholder="Enter the Username"
        />
        <input
          type="text"
          // onChange={handleOnChangeMessage}
          placeholder="Enter the Message"
        />
      </form> */}

      <h1>The username is : {username}</h1>
      <h2>The Message is : {message}</h2>

      {/* <h3>{props.test1}</h3>
      <h3>{props.test2}</h3> */}
    </div>
  );
};

export default HooksLifeCycle;
