import React from "react";
import { useState } from "react";

const FormHooks = () => {
  const [message, setMessage] = useState("");
  const changeMessage = (e) => {
    // console.log(e.target.value);
    setMessage(e.target.value);
  };
  return (
    <div>
      <h1>Form - Hooks</h1>
      <h2>{message}</h2>
      <form>
        <input
          type="text"
          //   onChange={(event) => setMessage(event.target.value)}
          onChange={changeMessage}
          placeholder="Type your message here..."
        />
      </form>
    </div>
  );
};

export default FormHooks;
