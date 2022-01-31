import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../reducers/user";

const Login = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() =>
          dispatch(
            login({
              fname: "John",
              email: "john@email.com",
              designation: "Software Developer",
            })
          )
        }
      >
        Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Login;
