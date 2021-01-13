import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import TestPage from "./components/pages/TestPage";

function App() {
  return (
    <div>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
    </div>
  );
}

export default App;
