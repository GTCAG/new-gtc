import React from "react";
import styled from "styled-components";

interface PageHeaderProps {
  img?: string;
  children?: any;
  height?: string;
  opacity?: string;
}

const Root = styled.div<PageHeaderProps>`
  width: 100%;
  height: ${({ height }) => height || "600px"};

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &::before {
    content: "";
    background-image: url(${({ img }) => img});
    background-color: ${({ theme }) => theme.colors.background};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    opacity: ${({ opacity }) => opacity || "0.2"};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const PageHeader: React.FC<PageHeaderProps> = (props: PageHeaderProps) => {
  return <Root {...props}>{props.children}</Root>;
};

export default PageHeader;
