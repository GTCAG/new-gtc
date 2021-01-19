import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import bgImg from "../../images/cafe.jpg";
import Display from "../texts/Display";
import cafe1Img from "../../images/cafe-1.jpg";
import Text from "../texts/Text";

interface CafePageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const Section = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lights.offWhite};
  padding: 110px ${({ theme }) => theme.dimensions.margins.dekstop};
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MaxWidthContainer = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  display: flex;
  white-space: preserve;

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const SectionImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 500px;
  max-height: 500px;
  object-fit: contain;
`;

const TextContainer = styled.div`
  margin-left: 100px;
  max-width: 579px;
  min-width: 200px;

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-left: 0;
    text-align: center;
  }
`;

const CafePage: React.FC<CafePageProps> = ({ theme }) => {
  return (
    <Root>
      <PageHeader height="800px" img={bgImg}>
        <Display variant="large" color={theme.colors.lights.offWhite}>
          GTC Cafe
        </Display>
      </PageHeader>
      <Section>
        <MaxWidthContainer>
          <SectionImage src={cafe1Img} />
          <TextContainer>
            <Display
              variant="small"
              weight="600"
              style={{ marginBottom: 16, marginTop: 40 }}
              color={theme.colors.primary.default}>
              Drink Coffee With Us
            </Display>
            <Text variant="medium">
              You can find the GTC Cafe occasionally open and available after
              the first service and after Youth service in the fellowship
              building
            </Text>

            <div style={{ marginTop: 80 }}>
              <Text variant="medium" style={{ fontStyle: "italic" }}>
                "not neglecting to meet together, as is the habit of some, but
                encouraging one another, and all the more as you see the Day
                drawing near."
              </Text>
              <Text
                variant="large"
                weight="bold"
                style={{ marginTop: 8, width: "100%", textAlign: "center" }}>
                Hebrews: 10:25 ESV
              </Text>
            </div>
          </TextContainer>
        </MaxWidthContainer>
      </Section>
    </Root>
  );
};

export default withTheme(CafePage);
