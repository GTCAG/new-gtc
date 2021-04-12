import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import Text from "../texts/Text";

interface LeaderProps {
  theme: DefaultTheme;
  image?: string;
  name: string;
  title: string;
}
const portraitWidth = 250;
const portraitHeight = 250;

const Root = styled.div`
  width: ${portraitWidth}px;
`;

const Portrait = styled.img`
  width: ${portraitWidth}px;
  height: ${portraitHeight}px;
  object-fit: cover;
`;

const NoPortrait = styled.div`
  width: ${portraitWidth}px;
  height: ${portraitHeight}px;
  background-color: #c4c4c4;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bottom = styled.div`
  //   height: 125px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accent.dark};
`;

const Leader: React.FC<LeaderProps> = ({ theme, image, title, name }) => {
  return (
    <Root>
      {image ? (
        <Portrait src="" />
      ) : (
        <NoPortrait>
          <Text>No Image Available</Text>
        </NoPortrait>
      )}
      <Bottom>
        <Text
          variant="medium"
          weight="500"
          color={theme.colors.lights.offWhite}
          style={{ marginTop: 16, marginBottom: 8 }}>
          {name}
        </Text>
        <Text
          variant="small"
          color={theme.colors.lights.offWhite}
          style={{ marginBottom: 16 }}>
          {title}
        </Text>
      </Bottom>
    </Root>
  );
};

export default withTheme(Leader);
