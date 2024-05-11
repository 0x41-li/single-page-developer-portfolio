// React initial import
import React from "react";
import ReactDOM from "react-dom/client";

// Components
import App from "./App";

// Main css
import "./main.css";

// Bind to the root id element, and render the react app inside
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
