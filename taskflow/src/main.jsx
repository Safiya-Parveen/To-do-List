import React from "react"; //imports react lib
import ReactDOM from "react-dom/client"; // import reactdom ... basic
import App from "./App.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);