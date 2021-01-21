import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavBar from "./components/atoms/NavBar";
import Footer from "./components/atoms/Footer";
import HomePage from "./components/pages/HomePage";
import TestPage from "./components/pages/TestPage";
import styled, { DefaultTheme, withTheme } from "styled-components";
import CafePage from "./components/pages/CafePage";
import BeliefPage from "./components/pages/BeliefPage";
import GTCLogo from "./components/svgs/GTCLogo";

interface ContentProps {
  hidden: boolean;
}

interface AppProps {
  theme: DefaultTheme;
}

const AppRoot = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContentRoot = styled.div<ContentProps>`
  width: 100%;
  height: 100%;

  display: ${(props) => (props.hidden ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const App: React.FC<AppProps> = ({ theme }) => {
  const [loaded, setLoaded] = useState(false);
  const [loaderHidden, setLoaderHidden] = useState(false);
  const handleLoaded = () => {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setLoaderHidden(true);
      }, 800);
    }, 350);
  };

  return (
    <AppRoot>
      <div
        className={`loader ${loaded && "loaded"} ${loaderHidden && "hidden"}`}>
        <GTCLogo color={theme.colors.cta.default} />
      </div>
      <ContentRoot hidden={!loaded}>
        <NavBar />
        <Route exact path="/">
          <HomePage onLoaded={handleLoaded} />
        </Route>
        <Route exact path="/test">
          <TestPage />
        </Route>

        <Route exact path="/cafe">
          <CafePage />
        </Route>

        <Route exact path="/belief">
          <BeliefPage />
        </Route>
        <Footer />
      </ContentRoot>
    </AppRoot>
  );
};

export default withTheme(App);
