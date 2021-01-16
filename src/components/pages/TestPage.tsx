import React from "react";
import styled from "styled-components";
import PageHeader from "../atoms/PageHeader";
import Display from "../texts/Display";
import Text from "../texts/Text";
import testImg from "../../images/cafe.jpg";
import NavBar from "../atoms/NavBar";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const MarginHeader = styled.div`
  margin-left: 100px;
`;

const Header = styled.div``;

const TestPage: React.FC = () => {
  return (
    <Root>
      <NavBar />
      <PageHeader
        alignItems="flex-start"
        img={testImg}
        bgLoad={() => console.log("LOADED")}>
        <MarginHeader>
          <Text color="white">test</Text>
        </MarginHeader>
      </PageHeader>
    </Root>
  );
};

export default TestPage;
