import React from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import bgImg from "../../images/church1.jpg";
import Display from "../texts/Display";

interface BeliefPageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const BeliefPage: React.FC<BeliefPageProps> = ({ theme }) => {
  return (
    <Root>
      <PageHeader
        filter="grayscale(100%) brightness(1.7)"
        img={bgImg}
        height="800px">
        <Display variant="medium" color={theme.colors.lights.white}>
          What We Believe
        </Display>
      </PageHeader>
    </Root>
  );
};

export default withTheme(BeliefPage);
