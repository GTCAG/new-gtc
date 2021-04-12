import React from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import Display from "../texts/Display";
import bgImg from "../../images/church1.jpg";
import PageSection from "../atoms/PageSection";
import Leader from "../atoms/Leader";

interface LeadershipPageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  margin-top: 200px;
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

const LeadershipPage: React.FC<LeadershipPageProps> = ({ theme }) => {
  return (
    <Root>
      <PageHeader
        height="800px"
        img={bgImg}
        filter="grayscale(100%) brightness(1.2)">
        <Display variant="large" color={theme.colors.lights.offWhite}>
          Leadership
        </Display>
      </PageHeader>

      <PageSection bgColor={theme.colors.background}>
        <Grid>
          <Leader name="Alexander Kalinyuk" title="Pastor" />
          <Leader name="Alexander Kalinyuk" title="Pastor" />
          <Leader name="Alexander Kalinyuk" title="Pastor" />
          <Leader name="Alexander Kalinyuk" title="Pastor" />
          <Leader name="Alexander Kalinyuk" title="Pastor" />
          <Leader name="Alexander Kalinyuk" title="Pastor" />
        </Grid>
      </PageSection>
    </Root>
  );
};

export default withTheme(LeadershipPage);
