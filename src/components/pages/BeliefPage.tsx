import React from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import bgImg from "../../images/church1.jpg";
import Display from "../texts/Display";
import Text from "../texts/Text";
import Underlined from "../texts/Underlined";
import Accordian from "../texts/Accordian";

interface BeliefPageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const ContentSection = styled.div`
  background-color: ${({ theme }) => theme.colors.lights.offWhite};
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
`;

const TitleBox = styled.div`
  position: absolute;
  top: -137px;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: 274px;
  max-width: 587px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.cta.default};
`;

const Beliefs = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
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

      <ContentSection>
        <TitleBox>
          <Display
            color={theme.colors.lights.offWhite}
            variant="medium"
            style={{ maxWidth: 418, padding: 40 }}
            weight="bold">
            Doctrines and Statements
          </Display>
        </TitleBox>
        <Text
          variant="medium"
          weight="500"
          style={{ maxWidth: 800, marginTop: 240, marginBottom: 70 }}>
          Our Statements and Doctrines align and reflect with the beliefs of the
          Assemblies of God. You can visit{" "}
          <Underlined href="https://ag.org/beliefs">ag.org/beliefs</Underlined>{" "}
          for a more detailed version of the Doctrines for Assemblies of God.
          You can also read the statements below (most of which come from{" "}
          <Underlined href="https://ag.org/">ag.org</Underlined>)
        </Text>

        <Beliefs style={{ marginBottom: 100 }}>
          <Accordian title="Yes Title">Test</Accordian>
          <Accordian title="Yes Title">Test</Accordian>
          <Accordian title="Yes Title">Test</Accordian>
          <Accordian title="Yes Title">Test</Accordian>
          <Accordian title="Yes Title">Test</Accordian>
        </Beliefs>
      </ContentSection>
    </Root>
  );
};

export default withTheme(BeliefPage);
