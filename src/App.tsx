import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/atoms/NavBar";
import Footer from "./components/atoms/Footer";
import HomePage from "./components/pages/HomePage";
import TestPage from "./components/pages/TestPage";
import styled from "styled-components";
import CafePage from "./components/pages/CafePage";

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

      <Route exact path="/cafe">
        <CafePage />
      </Route>
      <Footer />
    </AppRoot>
  );
}

export default App;
