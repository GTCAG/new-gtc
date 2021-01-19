import React from "react";
import styled from "styled-components";

interface TextProps {
  variant?: "large" | "medium" | "small" | "x-small" | "x-large";
  weight?: string;
  color?: string;
  children?: any;
  style?: any;
}

const Root = styled.p<TextProps>`
  ${({ theme }) => theme.fonts.text};
  font-weight: ${({ weight }) => weight || "normal"};
  letter-spacing: 0.75px;
  text-decoration: none;
  color: ${(props) => props.color || props.theme.colors.primary.default};
  font-size: ${(props) => {
    switch (props.variant) {
      case "x-large":
        return "32px";
      case "large":
        return "24px";
      case "medium":
        return "18px";
      case "small":
        return "16px";
      case "x-small":
        return "14px";
      default:
        return "18px";
    }
  }};
  line-height: ${(props) => {
    switch (props.variant) {
      case "large":
        return "38px";
      case "medium":
        return "34px";
      case "small":
        return "28px";
      case "x-small":
        return "24px";
      case "x-large":
        return "38px";
      default:
        return "48px";
    }
  }};
`;

const Text: React.FC<TextProps> = (props: TextProps) => {
  return <Root {...props}>{props.children}</Root>;
};

export default Text;
