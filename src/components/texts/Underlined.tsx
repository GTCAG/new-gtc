import React from "react";
import styled from "styled-components";

interface UnderlinedProps {
  children?: any;
  link?: any;
}

const Root = styled.span`
  color: ${({ theme }) => theme.colors.cta.default};
  position: relative;
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

  &:hover:after {
    height: 50px;
  }
`;

const Underlined: React.FC<UnderlinedProps> = (props) => {
  return <Root>{props.children}</Root>;
};

export default Underlined;
