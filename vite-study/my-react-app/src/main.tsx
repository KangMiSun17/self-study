import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { setup } from "twind";

setup({
  theme: {
    colors: {
      primary: {
        DEFAULT: "#6A77FF",
        3: "#8893FF",
      },
      line: {
        1: "#E5E5E5",
      },
      white: "#fff",
      black: "#191919",
      txt: {
        1: "",
        2: "#4A4A4A",
        3: "#999999",
      },
      bg: {
        2: "#F9F9F9",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
