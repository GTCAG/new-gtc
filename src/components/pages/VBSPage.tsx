import React from 'react';
import PageHeader from '../atoms/PageHeader';
import vbsBg from '../../images/vbs_background.jpg';
import vbsPic1 from '../../images/vbs.jpg';
import Root from '../atoms/Root';
import PageHeaderContent from '../atoms/PageHeaderContent';
import TitleText from '../atoms/PageHeaderTitle';
import Divider from '../atoms/Divider';
import Button from '../input/Button';
import PageSection from '../atoms/PageSection';
import { useTheme } from 'styled-components';
import SectionContent from '../atoms/SectionContent';
import SectionImage from '../atoms/SectionImage';
import TextContainer from '../atoms/TextContainer';
import Display from '../texts/Display';
import Text from '../texts/Text';

const VBSPage = () => {
  const theme = useTheme();
  return (
    <Root>
      <PageHeader img={vbsBg}>
        <PageHeaderContent>
          <TitleText>VBS Wonder 2022</TitleText>
          <Divider />
          <Button
            href="https://forms.gle/dAmBmJjnVZXU9v5J7"
            backgroundColor="#eee"
            borderColor="#eee"
            color="#222"
            width="100%"
          >
            Sign up for VBS here
          </Button>
        </PageHeaderContent>
      </PageHeader>

      <PageSection bgColor={theme.colors.lights.offWhite}>
        <SectionContent flexDirection="column">
          <TextContainer self>
            <Display
              variant="small"
              style={{ marginBottom: 40, marginTop: 40 }}
            >
              You're invited to VBS 2022
            </Display>
            <Text>
              Sign up by clicking the button above or scan the QR code below.
            </Text>
          </TextContainer>
          <SectionImage src={vbsPic1} maxHeight="700px" maxWidth="700px" />
        </SectionContent>
      </PageSection>
    </Root>
  );
};

export default VBSPage;
