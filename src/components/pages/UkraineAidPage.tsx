import React from 'react';
import styled, { useTheme } from 'styled-components';
import PageHeader from '../atoms/PageHeader';
import bgImg from '../../images/ukraine-flag.jpg';
import Text from '../texts/Text';
import SlideUp from '../animation-containers/SlideUp';
import PageSection from '../atoms/PageSection';
import Button from '../input/Button';
import contentPhoto1 from '../../images/ukraine-fence.jpg';
import Display from '../texts/Display';

const Root = styled.div`
  width: 100%;
`;

interface DividerProps {
  color?: string;
}

const TitleText = styled(Text)`
  color: #eee;
  font-size: 40px;
`;

const Divider = styled.div<DividerProps>`
  width: 100%;
  height: 1px;
  margin: 32px 0px;
  background-color: ${({ color }) => color || '#eee'};
`;

const SectionImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 470px;
  max-height: 470px;
  object-fit: contain;
`;

const SectionContent = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  margin-left: 40px;
  max-width: 579px;
  min-width: 200px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakPoints.desktop}) {
    margin-left: 0;
  }
`;

const PageHeaderContent = styled.div`
  padding: 20px;
  text-align: center;
`;

const UkraineAidPage = () => {
  const theme = useTheme();
  return (
    <Root>
      <PageHeader height="600px" img={bgImg} opacity="0.1">
        <PageHeaderContent>
          <SlideUp delay="0.1s">
            <TitleText>UKRAINE DONATION DRIVE</TitleText>
          </SlideUp>
          <SlideUp delay="0.4s">
            <Divider />
          </SlideUp>
          <SlideUp delay="0.7s">
            <Button
              href="https://www.paypal.com/paypalme/gracetrinityag?country.x=US&amp;locale.x=en_US"
              backgroundColor="#6a8bf7"
              borderColor="#6a8bf7"
              color="#222"
              width="100%"
            >
              DONATE ONLINE
            </Button>
          </SlideUp>
        </PageHeaderContent>
      </PageHeader>

      <PageSection bgColor={theme.colors.lights.offWhite}>
        <SectionContent>
          <SectionImage src={contentPhoto1} />
          <TextContainer>
            <Display
              variant="small"
              weight="600"
              style={{ marginBottom: 16, marginTop: 40 }}
              color={theme.colors.primary.default}
            >
              We're holding a Donation Drive!
            </Display>
            <Text variant="medium">
              Donations will be accepted at:
              <br />
              <br />
              Grace Trinity Church Assemblies of God
              <br />
              5821 Auburn Blvd, Sacramento, CA 95841
              <br />
              <br />
              April 20 and 21, 2022.
              <br />
              Daily Hours: 2pm-8pm
            </Text>

            <div>
              <Text
                variant="medium"
                style={{ fontStyle: 'italic', marginTop: 10 }}
              >
                "Contribute to the needs of God's people, and welcome strangers
                into your home."
              </Text>
              <Text
                variant="large"
                weight="bold"
                style={{ marginTop: 8, width: '100%', textAlign: 'center' }}
              >
                Romans: 12:13
              </Text>
            </div>
          </TextContainer>
        </SectionContent>
        <div style={{ textAlign: 'center', marginTop: 80 }}>
          <Display
            variant="small"
            weight="600"
            style={{ marginBottom: 16, marginTop: 40 }}
            color={theme.colors.primary.default}
          >
            Donation Items Requested:
          </Display>
          <Text variant="large" style={{ fontWeight: 'bold', marginTop: 40 }}>
            Medical-related supplies
          </Text>
          <Text>
            insulin, pre/post-surgery supplies, skin staplers, dressings, gauze,
            saline, catheters, alcohol wipes, pain medicine for adults and
            children, sterilized gloves, cast material, suture kits, band aids,
            tourniquets, quick clot gauze, betadine, crutches, wheelchairs
          </Text>
          <Text variant="large" style={{ fontWeight: 'bold', marginTop: 40 }}>
            Food/Nutition-related supplies
          </Text>
          <Text>
            baby formula, pedialyte/electrolyte replacements, vitamins (adult
            and children)
          </Text>
          <Text variant="large" style={{ fontWeight: 'bold', marginTop: 40 }}>
            Other
          </Text>
          <Text>
            Baby wipes, Warm gloves (all sizes), Diapers (baby and adult, all
            sizes), Warm socks (all sizes), Baby bottles Boots (all sizes),
            Hygiene products (new only), Thermal gear (pants/tops all sizes),
            Warm blankets (all sizes), Headlamps with lights, Warm thermal
            sheets (all sizes), Batteries (all sizes), Sleeping bags (all
            sizes), Flashlights, Backpacks, Paper plates and cups, Knee pads,
            Protective gear/armor (vests)
          </Text>
          <Display
            variant="small"
            weight="600"
            style={{ marginBottom: 16, marginTop: 80 }}
            color={theme.colors.primary.default}
          >
            Questions?
          </Display>
          <Text>
            Please call Tatyana at 916-475-9032 or email
            gracetrinityag@yahoo.com
          </Text>
          <Text variant="medium" style={{ fontStyle: 'italic', marginTop: 10 }}>
            * A donation receipt will be provided by Grace Trinity Church AG for
            eligible donations.
          </Text>
        </div>
      </PageSection>
    </Root>
  );
};

export default UkraineAidPage;
