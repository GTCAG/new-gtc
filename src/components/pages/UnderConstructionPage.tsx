import React from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import bgImg from "../../images/church1.jpg";

import PageHeader from "../atoms/PageHeader";
import Display from "../texts/Display";
import Text from "../texts/Text";

interface UnderConstructionPageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const UnderConstructionPage: React.FC<UnderConstructionPageProps> = ({
  theme,
}) => {
  return (
    <Root>
      <PageHeader height="800px" img={bgImg}>
        <Display variant="large" color={theme.colors.lights.offWhite}>
          Page Under Construction...
        </Display>
        <Text
          color={theme.colors.lights.offWhite}
          variant="x-large"
          style={{ marginTop: 24 }}>
          Check back later!
        </Text>
      </PageHeader>
    </Root>
  );
};

export default withTheme(UnderConstructionPage);
