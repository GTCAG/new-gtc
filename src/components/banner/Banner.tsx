import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Text from '../texts/Text';

interface BannerProps {
  to?: string;
  children?: any;
  bgColor?: string;
}

const Root = styled.div<BannerProps>`
  width: 100%;
  min-height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme, bgColor }) =>
    bgColor || theme.colors.cta.default};
  box-sizing: border-box;
`;

const BannerLink = styled(Link)`
  text-decoration: none;
`;

const BannerText = styled(Text)`
  color: black;
  text-align: center;
`;

const Banner: React.FC<BannerProps> = ({ to, children, ...rest }) => {
  if (to) {
    return (
      <BannerLink to={to}>
        <Root {...rest}>
          <BannerText variant="medium">{children}</BannerText>
        </Root>
      </BannerLink>
    );
  }

  return <Root>{children}</Root>;
};

export default Banner;
