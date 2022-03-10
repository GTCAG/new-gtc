import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "../texts/Text";

const Root = styled.div`
  width: 100%;
  min-height: 70px;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.cta.default};
  box-sizing: border-box;
`;

const BannerLink = styled(Link)`
  text-decoration: none;
`;

const BannerText = styled(Text)`
  color: black;
  text-align: center;
`;

const Banner: React.FC<any> = ({ to, children }) => {
  if (to) {
    return (
      <BannerLink to={to}>
        <Root>
          <BannerText variant="medium">{children}</BannerText>
        </Root>
      </BannerLink>
    );
  }

  return <Root>{children}</Root>;
};

export default Banner;
