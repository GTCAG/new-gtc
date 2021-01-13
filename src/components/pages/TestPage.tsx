import React from "react";
import styled from "styled-components";
import Display from "../texts/Display";
import Text from "../texts/Text";

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
      <Text variant="medium" color="#ffffff">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        eveniet, numquam ipsa eaque alias aliquid quae quia nobis amet, unde
        sapiente accusantium nihil inventore at perspiciatis beatae et quod
        perferendis.
      </Text>

      <Display color="#ffffff">Display Text</Display>
    </Root>
  );
};

export default TestPage;
