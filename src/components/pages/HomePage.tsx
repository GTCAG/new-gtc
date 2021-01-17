import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import headerBgImg from "../../images/cafe.jpg";
import Text from "../texts/Text";
import Display from "../texts/Display";
import Button from "../input/Button";
import Underlined from "../texts/Underlined";

interface HomePageProps {
  theme?: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const CenterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeaderCTAContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
`;

const HeaderCTA = styled.div`
  height: 443px;
  width: 530px;
  margin-left: 153px;
`;

const CTAColor = styled.span`
  color: ${({ theme }) => theme.colors.cta.default};
`;

const CTAButtons = styled.div`
  display: flex;
  margin-top: 40px;
  width: 413px;
  justify-content: space-between;
`;

const CTABlurb = styled.div`
  margin-top: 103px;
  width: 357px;
`;

const CTAUnderlined = styled.span`
  color: ${({ theme }) => theme.colors.cta.default};
  text-decoration: underline;
`;

const HomePage: React.FC<HomePageProps> = ({ theme }) => {
  return (
    <Root>
      <PageHeader
        img={headerBgImg}
        filter="grayscale(75%) brightness(1.2)"
        bgLoad={() => console.log("Loaded Home Page")}
        alignItems={"flex-start"}>
        <CenterContainer>
          <HeaderCTAContainer>
            <HeaderCTA>
              <Text
                variant="medium"
                weight="500"
                color={theme?.colors.lights.offWhite}>
                Together We Build
              </Text>
              <Display
                variant="large"
                weight="bold"
                color={theme?.colors.lights.offWhite}>
                Our Faith
                <br />
                In
                <CTAColor> Christ</CTAColor>
              </Display>
              <CTAButtons>
                <Button>Visit Us</Button>
                <Button variant="secondary">Learn More</Button>
              </CTAButtons>
              <CTABlurb>
                <Text
                  variant="medium"
                  weight="500"
                  color={theme?.colors.lights.offWhite}>
                  Join our livestream on <Underlined>YouTube</Underlined> at
                  9:00am-10:30am or 11:30am-1:00pm
                </Text>
              </CTABlurb>
            </HeaderCTA>
          </HeaderCTAContainer>
        </CenterContainer>
      </PageHeader>
    </Root>
  );
};

export default withTheme(HomePage);
