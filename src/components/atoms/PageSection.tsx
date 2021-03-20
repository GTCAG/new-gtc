import React from "react";
import styled from "styled-components";

interface PageSectionProps {
  bgColor?: string;
  children: any;
}

const Root = styled.div<PageSectionProps>`
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.colors.lights.offWhite};
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Constraints = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  padding: 0 ${({ theme }) => theme.dimensions.margins.dekstop};
  box-sizing: border-box;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
`;

const PageSection: React.FC<PageSectionProps> = ({
  children,
  ...rest
}: PageSectionProps) => {
  return (
    <Root {...rest}>
      <Constraints>{children}</Constraints>
    </Root>
  );
};

export default PageSection;
