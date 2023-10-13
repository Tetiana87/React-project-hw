import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import Login from "./containers/Login/Login";
import Products from "./containers/Products/Products";
// import Preview from "./containers/Preview/Preview";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Login /> */}
    {/* <Preview /> */}
    <Products />
  </React.StrictMode>
);
