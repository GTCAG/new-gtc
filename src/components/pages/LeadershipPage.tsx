import React from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import Display from "../texts/Display";
import bgImg from "../../images/church1.jpg";
import PageSection from "../atoms/PageSection";
import Leader from "../atoms/Leader";

import aleksandrPic from "../../images/leadership/aleksandr_kalinyuk.jpg";
import victorPic from "../../images/leadership/victor_artishuk.jpg";
import igorPic from "../../images/leadership/igor_demchuk.jpg";
import danyyilPic from "../../images/leadership/danyyil_zakharchuk.jpg";
import alexAPic from "../../images/leadership/alex_a_kalinyuk.jpg";

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-items: center;
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
          <Leader
            name="Bishop Aleksandr Kalinyuk"
            title="Senior Pastor"
            image={aleksandrPic}
          />
          <Leader name="Igor Demchuk" title="Pastor" image={igorPic} />
          <Leader name="Victor Artishuk" title="Pastor" image={victorPic} />
          <Leader name="Alex A Kalinyuk" title="Pastor" image={alexAPic} />
          <Leader name="Danyyil Zakharchuk" title="Pastor" image={danyyilPic} />
        </Grid>
      </PageSection>
    </Root>
  );
};

export default withTheme(LeadershipPage);
