// React initial import
import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";

// main css
import "./main.css";

// bind to the root id element, and render the react app inside
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
