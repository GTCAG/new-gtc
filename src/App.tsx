import React from "react";
import { Route } from "react-router-dom";
import TestPage from "./components/pages/TestPage";

function App() {
  return (
    <div>
      <Route path="/test">
        <TestPage />
      </Route>
    </div>
  );
}

export default App;
