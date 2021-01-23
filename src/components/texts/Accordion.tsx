import React, { useState, useEffect, useRef } from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import MinusCircle from "../svgs/MinusCircle";
import PlusCircle from "../svgs/PlusCircle";
import Text from "./Text";

interface AccordianProps {
  children?: any;
  title: string;
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-bottom: 1px solid ${({ theme }) => theme.colors.accent.dark};
  transition: all 0.15s ease-out;
`;
const InnerTitleBox = styled.div`
  padding: 0 24px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentBox = styled.div`
  max-height: 0;
  overflow: hidden;
  height: 100%;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  transition: all 0.35s ease-out;
`;

const Content = styled.div`
  width: 100%;
  padding: 24px 0px;
`;

const TitleContainer = styled.div`
  transition: all 0.15s ease-out;
  cursor: pointer;
  height: 60px;
  width: 100%;
  &:hover {
    background-color: ${({ theme }) => theme.colors.cta.default};
  }
`;

const Accordian: React.FC<AccordianProps> = ({ theme, title, children }) => {
  const [open, setOpen] = useState(false);
  const contentEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentEl = contentEl.current;
    if (currentEl && currentEl.style) {
      if (open) currentEl.style.maxHeight = currentEl.scrollHeight + "px";
      else currentEl.style.maxHeight = "0px";
    }
  }, [open]);

  return (
    <Root>
      <TitleContainer onClick={() => setOpen(!open)}>
        <InnerTitleBox>
          <Text variant="medium" weight="500">
            {title}
          </Text>
          {open ? <MinusCircle /> : <PlusCircle />}
        </InnerTitleBox>
      </TitleContainer>
      <ContentBox ref={contentEl}>
        <Content>{children}</Content>
      </ContentBox>
    </Root>
  );
};

export default withTheme(Accordian);
