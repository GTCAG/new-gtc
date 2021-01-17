import React, { useEffect } from "react";
import styled from "styled-components";

interface PageHeaderProps {
  img?: string;
  children?: any;
  height?: string;
  opacity?: string;
  justifyContent?: string;
  filter?: string;
  alignItems?: string;
  bgLoad?: () => void;
}

const Root = styled.div<PageHeaderProps>`
  width: 100%;
  height: ${({ height }) => height || "600px"};

  position: relative;
  display: flex;
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  flex-direction: column;

  &::before {
    content: "";
    background-image: url(${({ img }) => img});
    background-color: ${({ theme }) => theme.colors.background};
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    filter: ${(props) => props.filter};

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
  // onBgLoad functionality
  useEffect(() => {
    const imagePreLoader = document.createElement("img");
    if (props.img) {
      imagePreLoader.src = props.img;
      imagePreLoader.onload = () => {
        if (props.bgLoad) props.bgLoad();
      };
    }
  });
  return <Root {...props}>{props.children}</Root>;
};

export default PageHeader;
