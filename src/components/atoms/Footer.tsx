import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import logoImg from "../../images/GTC-Logo.svg";
import Text from "../texts/Text";
import { Link } from "react-router-dom";
import navData from "../../data/nav-data";
import YoutubeIcon from "../svgs/YoutubeIcon";

interface FooterProps {
  theme: DefaultTheme;
}

const CenterMaxWidth = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Root = styled.footer`
  display: flex;
  width: 100%;
  max-width: ${({ theme }) => theme.dimensions.maxWidth};
  justify-content: space-between;
  box-sizing: border-box;
  padding: 70px ${({ theme }) => theme.dimensions.margins.dekstop};

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  height: 40px;
  width: 91.54px;
  margin-right: 32px;
`;

const ContactDetails = styled.div`
  width: 143px;
  height: 222px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin: 16px 0px;
  }
`;

const FlexContainer = styled.div`
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: column;
  }
`;

const LinkSection = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-bottom: 16px;
  }
`;

const FooterLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 10px;
  p {
    color: ${({ theme }) => theme.colors.primary.light};
  }

  &:hover p {
    color: ${({ theme }) => theme.colors.cta.default};
  }
`;

const FooterLinkSpacer = styled.div`
  margin-bottom: 6px;
`;

const MediaLinks = styled.div``;

const footerData = navData.filter((data) => data.sectionTitle);

const Footer: React.FC<FooterProps> = ({ theme }) => {
  const textVariant = "x-small";
  const color = theme.colors.lights.white;
  return (
    <CenterMaxWidth>
      <Root>
        <FlexContainer>
          <Logo src={logoImg} />
          <ContactDetails>
            <Text variant={textVariant} color={color}>
              5821 Auburn Blvd, Sacramento, CA 95841
            </Text>
            <Text variant={textVariant} color={color}>
              (Phone Number to be determined) Contact Us
            </Text>
            <Text variant={textVariant} color={color}>
              Service Times: 9:00am-10:30am 11:30am-1:00pm
            </Text>
          </ContactDetails>
        </FlexContainer>
        {footerData.map((sectionData, index) => (
          <LinkSection key={index}>
            {sectionData.links?.map((linksData, linksIndex) => (
              <FooterLinkSpacer key={linksIndex + ":" + index}>
                <FooterLink to={linksData.route}>
                  <Text variant={textVariant}>{linksData.title}</Text>
                </FooterLink>
              </FooterLinkSpacer>
            ))}
          </LinkSection>
        ))}
        <MediaLinks>
          <a href="https://www.youtube.com/channel/UCNaKPci4jHkzFyo2hYwlVRQ">
            <YoutubeIcon />
          </a>
        </MediaLinks>
      </Root>
    </CenterMaxWidth>
  );
};

export default withTheme(Footer);
