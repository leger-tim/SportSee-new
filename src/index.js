import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import ParentComponent from "./ParentComponent";
import ParentComponent from "./PC";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ParentComponent />
  </React.StrictMode>
);
