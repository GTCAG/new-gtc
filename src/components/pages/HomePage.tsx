import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import headerBgImg from "../../images/service.jpg";
import Text from "../texts/Text";
import Display from "../texts/Display";
import Button from "../input/Button";
import Underlined from "../texts/Underlined";
import { useHistory } from "react-router-dom";
import SlideUp from "../animation-containers/SlideUp";
import PageSection from "../atoms/PageSection";
import MapView from "../atoms/MapView";
import NormalButton from "../input/NormalButton";

interface HomePageProps {
  theme?: DefaultTheme;
  onLoaded: () => void;
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
  width: 530px;
  margin: 0 153px;

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    margin: 0 ${({ theme }) => theme.dimensions.margins.tablet};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }
`;

const CTAColor = styled.span`
  color: ${({ theme }) => theme.colors.cta.default};
`;

const CTAButtons = styled.div`
  display: flex;
  margin-top: 40px;
  max-width: 413px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    flex-direction: column;
    width: 100%;

    button {
      width: 100%;
    }

    a {
      width: 100%;
    }
  }
`;

const CTABlurb = styled.div`
  width: 357px;
`;

const MissionStatement = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary.default};
  height: 409px;
  width: 100%;
  text-align: center;
`;

const MissionText = styled(Text)`
  max-width: 920px;
  padding: 0px ${({ theme }) => theme.dimensions.margins.dekstop};

  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}) {
    padding: 0px ${({ theme }) => theme.dimensions.margins.tablet};
    font-size: 17.5px;
  }
`;

const HomePage: React.FC<HomePageProps> = ({ theme, onLoaded }) => {
  const history = useHistory();
  return (
    <Root>
      <PageHeader
        img={headerBgImg}
        filter="grayscale(75%) brightness(1.2)"
        bgLoad={onLoaded}
        alignItems={"flex-start"}>
        <CenterContainer>
          <HeaderCTAContainer>
            <HeaderCTA>
              <SlideUp delay="0.4s">
                <Text
                  variant="medium"
                  weight="500"
                  color={theme?.colors.lights.offWhite}>
                  Together We Build
                </Text>
              </SlideUp>
              <SlideUp delay="0.8s">
                <Display
                  variant="large"
                  weight="bold"
                  color={theme?.colors.lights.offWhite}>
                  Our Faith
                  <br />
                  In
                  <CTAColor> Christ</CTAColor>
                </Display>
              </SlideUp>
              <CTAButtons>
                <SlideUp delay="1s">
                  <Button href="https://www.google.com/maps/place/Grace+Trinity+Church/@38.6722806,-121.3308039,19z/data=!4m12!1m6!3m5!1s0x0:0x9f3daf42aa68e42f!2sGrace+Trinity+Church!8m2!3d38.6722971!4d-121.3305286!3m4!1s0x0:0x9f3daf42aa68e42f!8m2!3d38.6722971!4d-121.3305286?hl=en-US">
                    Visit Us
                  </Button>
                </SlideUp>
                <SlideUp delay="1.1s">
                  <Button
                    variant="secondary"
                    onClick={() => history.push("/media")}>
                    View our Media
                  </Button>
                </SlideUp>
              </CTAButtons>
              <SlideUp delay="1.2s" style={{ marginTop: 103 }}>
                <CTABlurb>
                  <Text
                    variant="medium"
                    weight="500"
                    color={theme?.colors.lights.offWhite}>
                    Join our livestream on{" "}
                    <Underlined href="https://www.youtube.com/channel/UCNaKPci4jHkzFyo2hYwlVRQ">
                      YouTube
                    </Underlined>{" "}
                    at 10:00am-12:00pm
                  </Text>
                </CTABlurb>
              </SlideUp>
            </HeaderCTA>
          </HeaderCTAContainer>
        </CenterContainer>
      </PageHeader>
      <MissionStatement>
        <MissionText
          variant="large"
          weight="500"
          color={theme?.colors.lights.offWhite}>
          The mission of Grace Trinity Church is to glorify God by introducing
          Jesus Christ as Lord to the city of Sacramento and more. Leading them
          into a fully-devoted relationship with the one who set us free.
        </MissionText>
      </MissionStatement>
      <PageSection bgColor={theme?.colors.lights.offWhite}>
        <Text
          weight="bold"
          variant="x-large"
          style={{ textAlign: "center", marginTop: 48, marginBottom: 48 }}>
          Come visit us in our building
        </Text>
        <MapView />
        <NormalButton href="https://www.google.com/maps/place/Grace+Trinity+Church/@38.6722806,-121.3308039,19z/data=!4m12!1m6!3m5!1s0x0:0x9f3daf42aa68e42f!2sGrace+Trinity+Church!8m2!3d38.6722971!4d-121.3305286!3m4!1s0x0:0x9f3daf42aa68e42f!8m2!3d38.6722971!4d-121.3305286?hl=en-US">
          View on Maps
        </NormalButton>
      </PageSection>
    </Root>
  );
};

export default withTheme(HomePage);
