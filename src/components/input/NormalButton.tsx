import React from "react";
import styled, { CSSProperties } from "styled-components";

interface NormalButtonProps {
  children: any;
  href?: string;
  width?: string;
  height?: string;
  style?: CSSProperties;
}

const Root = styled.div<NormalButtonProps>`
  padding: 20px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  outline: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.cta.default};
  color: ${({ theme }) => theme.colors.accent.default};

  ${({ theme }) => theme.fonts.text};
  font-weight: 500;
  font-size: 16.5px;

  cursor: pointer;
  text-decoration: none;
  transition: all 0.2s ease;
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }
`;

const Container = styled.div<NormalButtonProps>`
  width: ${({ width }) => width || "100%"};
`;

const NormalButton: React.FC<NormalButtonProps> = (props) => {
  return (
    <Container {...props}>
      <Root as={props.href ? "a" : "button"} {...props}>
        {props.children}
      </Root>
    </Container>
  );
};

export default NormalButton;
