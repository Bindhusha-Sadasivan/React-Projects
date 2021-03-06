// REACT ONLY

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// =============================================================================================

// REACT-REDUX ONLY

// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";
// import userReducer from "./reducers/user";

// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
