import React from "react";
import styled from "styled-components";
import PageHeader from "../atoms/PageHeader";
import Display from "../texts/Display";
import Text from "../texts/Text";
import testImg from "../../images/cafe.jpg";

const Root = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TestPage: React.FC = () => {
  return (
    <Root>
      <PageHeader img={testImg}>
        <Display color="#ffffff">Display Text</Display>
        <Text color="#fff">Hello Text</Text>
      </PageHeader>
    </Root>
  );
};

export default TestPage;
