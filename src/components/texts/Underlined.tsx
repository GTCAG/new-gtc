import React from "react";
import styled from "styled-components";

interface UnderlinedProps {
  children?: any;
  href?: string;
}

const Root = styled.span<UnderlinedProps>`
  color: ${({ theme }) => theme.colors.cta.default};
  position: relative;
  ${(props) => (props.href ? `cursor: pointer;` : "")};
  text-decoration: none;
  ::after {
    content: "";
    width: 100%;
    height: 1px;
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: height 0.2s ease-out;
    background-color: ${({ theme }) => theme.colors.cta.default};
  }
`;

const Underlined: React.FC<UnderlinedProps> = (props) => {
  return (
    <Root as={props.href ? "a" : "span"} {...props}>
      {props.children}
    </Root>
  );
};

export default Underlined;
