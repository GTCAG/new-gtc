import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import Text from "./Text";

interface AccordianProps {
  children?: any;
  title: string;
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent.dark};
`;
const InnerTitleBox = styled.div`
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Accordian: React.FC<AccordianProps> = ({ theme, title, children }) => {
  return (
    <Root>
      <InnerTitleBox>
        <Text variant="small" weight="500">
          {title}
        </Text>
      </InnerTitleBox>
    </Root>
  );
};

export default withTheme(Accordian);
