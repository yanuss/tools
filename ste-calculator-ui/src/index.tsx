import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { injectGlobal } from "@emotion/css";
import { colors } from "./theme.style";

injectGlobal`
  body {
    color: ${colors.white};
    background-color: ${colors.bakgroundDarkBlue};
    overflow-x: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    font-family: raleway, sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
