import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/atoms/NavBar";
import HomePage from "./components/pages/HomePage";
import TestPage from "./components/pages/TestPage";
import styled from "styled-components";

const AppRoot = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

function App() {
  return (
    <AppRoot>
      <NavBar />
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route exact path="/test">
        <TestPage />
      </Route>
    </AppRoot>
  );
}

export default App;
