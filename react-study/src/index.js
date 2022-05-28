import React from "react";
import ReactDOM from "react-dom/client";
import { hydrate } from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
const roots = document.getElementById("root");

if (roots.hasChildNodes()) {
  hydrate();
} else {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
