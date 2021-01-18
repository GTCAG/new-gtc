import React from "react";
import styled from "styled-components";
import PageHeader from "../atoms/PageHeader";
import testImg from "../../images/cafe.jpg";
import Button from "../input/Button";
import Footer from "../atoms/Footer";

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

const TestPage: React.FC = () => {
  return (
    <Root>
      <PageHeader
        alignItems="flex-start"
        img={testImg}
        bgLoad={() => console.log("LOADED")}>
        <MarginHeader>
          <Button>Visit Us</Button>
          <Button variant="secondary">Contact Us</Button>
        </MarginHeader>
      </PageHeader>
      <Footer />
    </Root>
  );
};

export default TestPage;
