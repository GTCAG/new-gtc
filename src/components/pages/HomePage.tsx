import React from "react";
import styled from "styled-components";
import PageHeader from "../atoms/PageHeader";

interface HomePageProps {}

const Root = styled.div`
  width: 100%;
`;

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Root>
      <PageHeader
        bgLoad={() => console.log("Loaded Home Page")}
        alignItems={"flex-start"}></PageHeader>
    </Root>
  );
};

export default HomePage;
