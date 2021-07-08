import React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import Text from "../texts/Text";

interface LeaderProps {
  theme: DefaultTheme;
  image?: string;
  name: string;
  title: string;
}

const portraitWidth = 300;
const portraitHeight = 200;

const Root = styled.div`
  width: ${portraitWidth}px;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.lights.offWhite};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Portrait = styled.img`
  width: ${portraitWidth}px;
  height: ${portraitHeight}px;
  object-fit: cover;

  filter: brightness(0.95);
  position: relative;
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
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.colors.accent.dark};
`;

const Leader: React.FC<LeaderProps> = ({ theme, image, title, name }) => {
  return (
    <Root>
      <div>
        {image ? (
          <Portrait src={image} />
        ) : (
          <NoPortrait>
            <Text>No Image Available</Text>
          </NoPortrait>
        )}
        <Text
          variant="medium"
          weight="500"
          color={theme.colors.lights.offWhite}
          style={{ marginTop: 16, marginBottom: 8, textAlign: "center" }}>
          {name}
        </Text>
      </div>
      <Bottom>
        <Text
          variant="small"
          color={theme.colors.lights.offWhite}
          style={{ marginBottom: 16, opacity: 0.65 }}>
          {title}
        </Text>
      </Bottom>
    </Root>
  );
};

export default withTheme(Leader);
