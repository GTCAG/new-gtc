import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/MainTheme";
import { BrowserRouter as Router } from "react-router-dom";
import CssReset from "./themes/global/CssReset";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={mainTheme}>
      <Router>
        <CssReset />
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
