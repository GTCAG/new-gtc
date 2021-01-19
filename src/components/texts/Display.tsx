import React from "react";
import styled from "styled-components";

interface DisplayProps {
  variant?: "large" | "medium" | "small";
  weight?: string;
  color?: string;
  children?: any;
  style?: any;
}

const Root = styled.h2<DisplayProps>`
  ${({ theme }) => theme.fonts.display};
  font-weight: ${({ weight }) => weight || "700"};

  color: ${(props) => props.color || props.theme.colors.primary.default};
  font-size: ${(props) => {
    switch (props.variant) {
      case "large":
        return "64px";
      case "medium":
        return "48px";
      case "small":
        return "32px";
      default:
        return "48px";
    }
  }};
  line-height: ${(props) => {
    switch (props.variant) {
      case "large":
        return "64px";
      case "medium":
        return "48px";
      case "small":
        return "32px";
      default:
        return "48px";
    }
  }};
`;

const Display: React.FC<DisplayProps> = (props: DisplayProps) => {
  return <Root {...props}>{props.children}</Root>;
};

export default Display;
